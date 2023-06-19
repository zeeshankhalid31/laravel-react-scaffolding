import { useForm } from 'react-hook-form'

export default function Input({ label, register, required }) {
    return (
        <>
            <label>{label}</label>
            <input {...register(label, { required })} />
        </>
    )
}
