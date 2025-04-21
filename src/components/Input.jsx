const Input = (props) => {
    return (
        //Adicionando props um por um, para que o componente seja reutilizável
        // <input type={props.type} placeholder={props.placeholder} onChange={props.onChange}  value={props.value} className="border border-slate-300 outline-slate-400 w-full rounded-md px-4 py-2" />
        //-------------------------------------------------------------------------
        // Usando o operador spread para adicionar as props de uma forma generica, assim o componete pode receber qualquer tipo de propriedade
        // sem precisar adicionar uma por uma, o que torna o componente mais reutilizável
        //Adicionando props de forma mais generica, para que o componente seja reutilizável
        <input {...props} className="border border-slate-300 outline-slate-400 w-full rounded-md px-4 py-2" />
    );
}

export default Input;