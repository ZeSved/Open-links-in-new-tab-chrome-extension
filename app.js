// const check = document.getElementById('check-199580')
// const h1 = document.getElementById('h1-287096')

// const storageKey = 'OPEN-LINK-IN-NEW-TAB-KEY'
// const currentStatus = localStorage.getItem(storageKey)
// let activated = true

// if (currentStatus === 'false') {
// 	activated = false
// 	check.value = false
// }

Array.from(document.getElementsByTagName('a')).forEach((d) => {
	d.target = '_blank'
})
// check.addEventListener('click', () => {
// 	activated = !activated
// 	check.value = !check.value

// 	if (check.value) {

// 		localStorage.setItem(storageKey, 'true')

// 		h1.textContent = 'ON'
// 	} else {
// 		localStorage.setItem(storageKey, 'false')

// 		h1.textContent = 'OFF'
// 	}
// })
