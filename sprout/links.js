var links = new Array();
            links[0] = "mechanical.html";
            links[1] = "kingmalt.html";
            links[2] = "heron.html";
            links[3] = "sand.html";
            links[4] = "mech.html";
            links[5] = "soldier.html";
            
            function openLink() {
              var i = Math.floor(Math.random() * links.length);
              parent.location = links[i];
              return false;
            }