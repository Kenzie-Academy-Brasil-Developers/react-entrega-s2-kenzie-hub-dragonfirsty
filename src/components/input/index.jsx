import { Container } from "./styles"

const Input = ({label,error,register,name, ...rest}) =>{

    return(
        <Container>
            <div>
                {label}
            </div>
            <input {...register(name)}  {...rest} />
            {!!error && <p className="error">{error}</p>}
        </Container>
    )

}

export default Input