import { SubmitHandler, useForm } from "react-hook-form";

export const Home = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm<{
    pokemonName: string;
  }>();

  const onSubmit: SubmitHandler<{
    pokemonName: string;
  }> = async (data) => {
    console.log(data);

    fetch(`https://pokeapi.co/api/v2/pokemon/${data.pokemonName}`, {
      method: "GET",
    }).then((res) => res.json());
  };

  return (
    <div>
      <h1>PokeNerd</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter a Pokemon name"
          {...register("pokemonName", { required: true })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
