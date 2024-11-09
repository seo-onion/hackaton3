import React from 'react'
import {getRoleBasedOnToken} from "../utils/getRoleBasedOnToken"
import { useAuthContext } from '../contexts/AuthContext'
import ItemList from '../components/ItemList';
export default function MainPage () {
    const { session } = useAuthContext();

    // Obtén el rol del usuario utilizando la función getRoleBasedOnToken
    let role = "";
    try {
        role = getRoleBasedOnToken(); // Asumimos que retorna "admin" o algún otro rol
    } catch (error) {
        console.error(error);
    }
    return (
        <>
            <ItemList />
        </>
    );
}
