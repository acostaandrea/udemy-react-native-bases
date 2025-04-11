import { useForm } from "react-hook-form";

type FormInputs={
    email: string;
    password: string;
}

export const FormsPage = () => {
  const {register, handleSubmit, watch} = useForm<FormInputs>({
    defaultValues: {
        email: "jjjjj@gml.com",
        password: "sdfsdfsd"
    }
    
  });
  const onSubmit = (myForm: FormInputs) => {
    console.log({myForm});
  }

  console.log(watch("email")); // watch input value by passing the name of it



  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Formularios</h3>
            <div className="flex flex-col space-y-2 w-[500px]">
                <input type="email" placeholder="email" className="border border-gray-300 rounded-md p-2 mt-1" {...register('email', {required: true})}/>
                <input type="password" placeholder="password" className="border border-gray-300 rounded-md p-2 mt-1" {...register('password', {required: true})} />
                <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">Ingresar</button>
            </div>
        </form>
    </>
  );
};
