const mainElements = document.querySelectorAll('.main-menu')
const subElements = document.querySelectorAll('.sub-menu li')


subElements.forEach((subElement) => {
    subElement.addEventListener('click', function(){
        const clickedElement = this;
    
    subElements.forEach((otherSubElements) => {
        if (otherSubElements !== clickedElement) {
            otherSubElements.classList.remove('sub-menu-bold')
        }
    });
    subElement.classList.toggle('sub-menu-bold')
    });
});
    
    
    
// function olexeRemoveBlock() {
    //     this.classList.toggle("removeBlock")
    // }
    
    
    // mainElements.forEach((mainElement) => {
        //     const subMenu = mainElement.querySelector('.options');
        //     mainElement.addEventListener('click', (event) => {
            //         event.stopPropagation();
            //         subMenu.classList.toggle('active');
            //     });
            // });
            const subMenu = document.querySelector('.sub-menu');
            const subMenuStyle = window.getComputedStyle(subMenu, null);
            
            let submenuDisplayNone = subMenuStyle.getPropertyValue("display");
            // console.log(submenuDisplayNone)
            // if (submenuDisplayNone === 'none') {
                //     console.log("element blocked")
                //     subMenu.classList.add('submenu-onclick')
                // }
                // else {
                    //     console.log("not blocked")
                    //     subMenu.classList.remove('submenu-onclick')
                    // }
                    
                    
                    
                    

                    // Beginning of code 
        
        mainElements.forEach((mainElement) => {
            mainElement.addEventListener('click', function(event) {
                event.preventDefault();
                
                const subMenu = this.querySelector('.sub-menu');
                const elementClicked = this;
                subMenu.classList.toggle('submenu-onclick');
                mainElement.classList.toggle('underlined');
                
                const subMenuItems = mainElement.querySelectorAll('.sub-menu li');
subMenuItems.forEach((subMenuItem) => {
    subMenuItem.addEventListener('click', function(event) {
        event.stopPropagation();

                });
            });

        mainElements.forEach((otherElement) => {
            const otherSubMenu = otherElement.querySelector('.sub-menu');
            if (otherElement !== elementClicked) {
                if (otherSubMenu) {
                    otherSubMenu.classList.remove('submenu-onclick');
                }
                otherElement.classList.remove('underlined');
            };
            });
        });
    });
    


    // changes each of the tabs when menu sub item is clicked 
    
    function lxiLoad (event) {
        event.preventDefault();

        fetch(event.target.href)
        .then(response => response.text())
        .then(content =>  {
            const contentArea = document.querySelector('#content-area')
            contentArea.innerHTML = content;
            // console.log(content)

               // Find and load the associated scripts
               const scriptTags = contentArea.querySelectorAll('script');
               scriptTags.forEach(script => {
                 const newScript = document.createElement('script');
                 newScript.textContent = script.textContent;
                 document.body.appendChild(newScript);
               });

        })};
    
    // End of code
    
    
    
    
    
    



   // subMenu.style.display = (subMenu.style.display === 'block') ? 'none' : 'block'
        // const toggle = subMenu.classList.toggle('.submenu-onclick')

// Select the main menu items 
 
// When each main menu item is selected, the sub menu item removes the 'display:none' class

// mainElements.addEventListener('click', function(event) {
//     event.preventDefault();
//     this.classList.add('underline');
// })