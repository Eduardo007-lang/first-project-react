const Button = (props) => {

    return(
        <button {...props} className="bg-slate-400 text-white rounded-md  p-2 cursor-pointer" >
            {/* Adicionando props children que será motrado tudo que for inserido dentro do button, texto, icon e etc.. */}
            {props.children}
        </button>
    )
}


export default Button;