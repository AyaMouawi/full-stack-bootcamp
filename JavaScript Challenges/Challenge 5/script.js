//Step 1 


    const menuDiv = document.querySelector('.menu');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    console.log('Menu Div Children:', menuDiv.children);
    console.log('Header Children:', header.children);
    console.log('Footer Children:', footer.children);

    const containerDiv = document.createElement('div');
    containerDiv.className = 'container';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Hello, World!';
    paragraph.style.backgroundColor = 'blue';
    paragraph.style.color = 'white';
    paragraph.style.fontSize = '24px';
    paragraph.style.fontFamily = 'Helvetica';
    paragraph.style.border = '1px solid black';

    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
      heading.style.fontStyle = 'italic';
    });

    containerDiv.appendChild(paragraph);

    document.body.appendChild(containerDiv);

//Step 2 

        const colorChangeBtn = document.getElementById('color-change-btn');
        colorChangeBtn.addEventListener('mouseover', () => {
        colorChangeBtn.style.backgroundColor = 'green';
        });
        colorChangeBtn.addEventListener('mouseout', () => {
        colorChangeBtn.style.backgroundColor = '';
        });

        const originalDiv = document.getElementById('original');
        originalDiv.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            console.log('Clicked button text:', event.target.textContent);
        }
        });

        const userForm = document.getElementById('user-form');
        userForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const name = userForm.querySelector('#name').value;
        const email = userForm.querySelector('#email').value;

        console.log('Name:', name);
        console.log('Email:', email);
        });


//Step 3 veryy confusing needed alot of googling no one saved me but chatgpt, But i understood the concept 

        const cloneBtn = document.getElementById('clone-btn');
        let isCloned = false;
        let clonedDiv = null;

        cloneBtn.addEventListener('click', () => {
        if (!isCloned) {
            clonedDiv = originalDiv.cloneNode(true);
            clonedDiv.id = 'cloned-original';
            document.body.appendChild(clonedDiv);
            isCloned = true;
            cloneBtn.textContent = 'Hide Clone';
        } else {
            document.body.removeChild(clonedDiv);
            isCloned = false;
            cloneBtn.textContent = 'Show Clone';
        }
        });

        const removeHeaderBtn = document.createElement('button');
        removeHeaderBtn.textContent = 'Remove Header';
        document.body.appendChild(removeHeaderBtn);

        removeHeaderBtn.addEventListener('click', () => {
        const header = document.querySelector('header');
        header.remove();
        });


        function insertBeforeFooter(element) {
        const footer = document.querySelector('footer');
        footer.parentNode.insertBefore(element, footer);
        }


        const newElement = document.createElement('div');
        newElement.textContent = 'New Element Before Footer';
        insertBeforeFooter(newElement);