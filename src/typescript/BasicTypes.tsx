export const BasicTypes = () => {
  const name: string = "Andrea";
  const age: number = 28;
  const isActive: boolean = true;
  const powers : string [] = ["Super fuerza", "Velocidad", "Invisibilidad"];
  return (
    <>
      <h2 className="text-3xl font-bold underline">Basic Types</h2>
      <p>{name} - {age}</p>
      <p>{isActive ? 'Activo': 'No Activo'}</p>
      <p>{powers.join(', ')}</p>
      
    </>
  );
}; 
