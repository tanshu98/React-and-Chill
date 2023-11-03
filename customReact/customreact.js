function customRender(reactElement, container) {
    // Sabse pehle dom element lo..i.e basically create a dom element and fir usko jaha pe inject krna hain..i.e element ko add krna hain..toh fir usko append child krr denege..
    /*
    const domElement = document.createElement(reactElement.type);
    // Now currently the domElement is empty..so we will add some content to it..
    domElement.innerHTML = reactElement.children;
    // Then we have to add attributes
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    // container k ander dom add krdo..
    container.appendChild(domElement)
    */
   // The code between line 8,9 is repeatetive..so we will try and make some changes..
   const domElement = document.createElement(reactElement.type);
   domElement.innerHTML = reactElement.children;
   for (const prop in reactElement.props) {
    // Earlier version of react..there used to have..children inside props..so we will check for that 1st..(nahi lihla tri chalte)
    if(prop==='children') continue;
    domElement.setAttribute(prop,reactElement.prop ) // Here[prop] is the key..
   }
   container.appendChild(domElement)
}

// So..react kya krta hain..appka jo bhi elemnt hain..usse ek tree banane ki koshish krta hain
const reactElement = {
    type: 'a', // anchor tag
    props: {
       href: 'https://google.com',
       target: '_blank'
    },
    children: 'click me to visit google' // Here..we have added content to the anchor tag
}
// Step 1 = Grab Root ..
// WE can use document.getElementById() or document.querySelector()
// document.getElementById('#root'); 
const mainContainer = document.getElementById('root'); 

// Step 2 = Render

// In App.jsx, there..we have a App() which contains mutliple html tags..
// And so after exporting the App component..basically we are rendering those html tags..
/*
Now lets say..we wanna render a 'a' tag -

Now..we wanna study..how react actually sees the returned tags..what actually goes behined the scenes..

So..we are trying to understand..aapne jo function main html return karaya hain..woh react ko kaise dikhta hian .. See line 26-33

Step 2 ka code top pe rahega..as per video
*/

// Now we want a method..which will render..i.e basically woh element ko add krde root k ander
// Now this method..will expect to paramters..(React element(which we wanna inject), root(where we wanna inject)..

customRender(reactElement, mainContainer)