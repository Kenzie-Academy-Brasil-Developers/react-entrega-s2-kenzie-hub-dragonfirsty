import { Container } from "./styles"

const Input = ({label,error,register,name, ...rest}) =>{

    return(
        <Container>
            <div>
                {label}
            </div>
            <input {...register(name)}  {...rest} />
            <p>{!!error && <span>{error}</span>}</p>
        </Container>
    )

}

export default Input