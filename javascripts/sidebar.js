const sidebar = document.getElementById("sidebar")
const main = document.getElementById("main")

let isSidebarShown = false

export const showSidebar = () => {
	main.classList.add("sidebar-shown")
	sidebar.classList.add("sidebar-shown")
	isSidebarShown = true
}

export const hideSidebar = () => {
	main.classList.remove("sidebar-shown")
	sidebar.classList.remove("sidebar-shown")
	isSidebarShown = false
}

export const toggleSidebar = () => {
	if (isSidebarShown) {
		hideSidebar()
	} else {
		showSidebar()
	}
}

export default el => {
	el.showSidebar = showSidebar
	el.hideSidebar = hideSidebar
	el.toggleSidebar = toggleSidebar
}
