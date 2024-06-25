'use client';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'next/navigation';
import { TablePacientes } from '@/components/Psicologo/TablePacientes';

type Column = {
  sortable?: boolean;
  uid: string;
  name: string;
};

export default function Psicologo() {
  const paramet = useParams();
  const [users, setUsers] = useState([]);
  const [columns, setColumns] = useState<Column[]>([]);
  const [statusOptions, setStatusOptions] = useState([]);

  async function fetchUserData() {
    const jwt = localStorage.getItem('jwt');
    let userResponse = await axios.get(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/user-psicology-me/${paramet.id}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const id = userResponse.data.id; //id tabla psicologo
    const users = await axios.get(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/user-psicology-me/pacientes/${id}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    let columUser = Object.keys(users.data[0]);
    const columns = columUser.map(uid => ({
      uid,
      name: uid.toUpperCase(),
      ...(uid !== 'direccions' && uid !== 'contactos' ? { sortable: true } : {}), // Asumiendo que solo 'direccions' y 'contactos' no son sortable
    }));
    userResponse = await axios.get(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/statuses`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const statusUser = userResponse.data.data.map((obj: { attributes: { descripcion: any; }; }) => obj.attributes.descripcion);
    const statusOptions = statusUser.map((status: string) => ({
      name: status, 
      uid: status.toLowerCase()
    }));
    setUsers(users.data);
    setColumns(columns);
    setStatusOptions(statusOptions);
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <TablePacientes users={users} columns={columns} statusOptions={statusOptions} />
    </>
  );
}