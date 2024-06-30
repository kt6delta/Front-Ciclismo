"use client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function HomePage() {
  const router = useRouter();
  //const notify = () => toast.error("Oops! Algo salio mal!");
  const notificacion = () => toast.success('Se envio exitosamente la informacion');
  // const notify = () => toast.info("Informacion");
  return (
    <div>
      <div>
        <button onClick={notificacion}>buton</button>
      </div>
    </div>
  );
}
