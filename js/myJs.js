			
			function changeActive(num){
				const link = document.getElementsByClassName("nav-link");
				//console.log(link);
				for(var i=0;i<link.length;i++){
					link[i].className="nav-link";
				}
				link[num].className="nav-link active";
			}