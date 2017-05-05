(function() {

	var tClass = document.querySelectorAll('[toggle-class]');
	for(var i=0;i<tClass.length;i++) {
		console.log(tClass)
		obj = JSON.parse(tClass[0].attributes.getNamedItem('toggle-class').value);
		obj.status = false;
		tClass[0].setAttribute('toggle-class', JSON.stringify(obj));
		tClass[i].onclick = tClassPerform;
	}


	function tClassPerform(ref) {
		var src = ref.target;
		obj = JSON.parse(src.attributes.getNamedItem('toggle-class').value);
		var tClassFor = document.querySelectorAll('[toggle-class-id]');
		for(var i=0;i<tClassFor.length;i++) {
			var id = tClassFor[i].attributes.getNamedItem('toggle-class-id').value;
			if(id == obj.for) {
				if(obj.status) { //remove
                   tClassFor[i].classList.remove(obj.class)
				} else { //add
                   tClassFor[i].classList.add(obj.class)
				}
			}
		}

		obj.status = !obj.status;
		src.setAttribute('toggle-class', JSON.stringify(obj));
	}

	

}) ();

 