export function showArquiView(container, presenter)
{
    container.innerHTML = `
    
            <h1>h1. gatos</h1>
        <h2>h2. perros</h2>
        <h3>h3. vacas  </h3>
       

`;


container.addEventListener("click", (event) =>{
  console.log("entre en el navar"); 
    const  link=event.target.closest("[data-view]");

    if(!link) return;
console.log("entre en el navar222"); 
    event.preventDefault();
    navigate(link.dataset.view);


} ); 

}