<script language="javascript">

        function preload(){
            imgs=Array('f1.jpg','f2.jpg','f3.jpg');
            imgQtde=imgs.length;
            for(i=0;i<imgQtde;i++){
                var preloadimg=new Image();
                preloadimg.src=imgs[i];
            }
        }

        function iniciaSlider(){
            preload();
            max=3;
            min=1;
            fi=min;
            tr=true;
            carregaFoto("f1.jpg");
            document.getElementById("moldura").addEventListener("transitionend", fimTr);
        }

        function carregaFoto(foto){
            document.getElementById("moldura").style.backgroundImage="URL("+foto+")";
        }

        function fimTr(){
            tr=true;
        }

        function prox(){
            if(tr){
                tr=false;
                fi++;
                if(fi>max){
                    fi=min;
                }

                carregaFoto("f"+fi+".jpg");
            }
        }

        function ant(){
            if(tr){
                tr=false;
                fi--;
                if(fi<min){
                    fi=max;
                }
                carregaFoto("f"+fi+".jpg");
            }
        }

    </script>