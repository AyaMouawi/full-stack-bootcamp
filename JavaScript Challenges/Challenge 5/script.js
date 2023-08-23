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



    