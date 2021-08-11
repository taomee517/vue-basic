export const mix = {
	methods: {
		showInnerText(event){
			// debugger
			alert(event.target.innerText)
		},
		
		showItem(thresh){
			alert(JSON.stringify(thresh))
		}
	}
}