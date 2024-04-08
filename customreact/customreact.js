function customRender(reactElement,Contaier)
{
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML= reactElement.Children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // Contaier.appendChild(domElement)
   
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.Children

    for(const prop in reactElement.props)
    {
       if(prop == 'children') continue;
       domElement.setAttribute(prop,reactElement.props[prop])   
    }
    Contaier.appendChild(domElement)
}

const reactElement = {

   type: 'a',
   props:{
    href:'http://google.com',
    target:'_blank',

   },

   Children:'click me to visit google'

}


const mainContaier=document.querySelector('#root')

customRender(reactElement,mainContaier)
