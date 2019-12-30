echo "in order to test the website online, I will temperatively save it in a subfolder of Weilei's github page"

echo does not work this way

#rsync -vurh --progress --stats . ../weileizeng.github.io/efc-temp



rsync -vurh --progress --stats . wzeng002@cluster.hpcc.ucr.edu:./.html/efc-web

