export const BasicTypes = () => {
  const name: string = "Andrea";
  const age: number = 28;
  const isActive: boolean = true;
  const powers : string [] = ["Super fuerza", "Velocidad", "Invisibilidad"];
  return (
    <>
      <h2>Basic Types</h2>
      <p>{name} - {age}</p>
      <p>{isActive ? 'Activo': 'No Activo'}</p>
      <p>{powers.join(', ')}</p>
      <p>{name.toUpperCase()}</p>
      <p>{name.length}</p>
      <p>{name.split("").reverse().join("")}</p>
      <p>{name.charAt(0)}</p>
      <p>{name.slice(1)}</p>
      <p>{name.substring(1)}</p>
      <p>{name.substr(1)}</p>
    </>
  );
};
