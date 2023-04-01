import { FieldValues, useForm } from "react-hook-form";

interface formData {
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<formData>();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  const intAge = 18;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 4 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Name field is required***</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">
            Name should be atleast 4 characters long
          </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button disabled={!isValid} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;

// interface props {
//   person?: string;
//   age?: number;
// }
//   const nameRef = useRef<HTMLInputElement>(null);
//   const ageRef = useRef<HTMLInputElement>(null);
//   const person = {
//     name: "",
//     age: 0,
//
//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     // if (nameRef.current !== null) person = nameRef.current.value;
//     // if (ageRef.current !== null) age = parseInt(ageRef.current.value);
//   };
