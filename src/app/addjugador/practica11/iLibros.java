/**
 * Practica 11 - Ejercicio 2
 * Un servidor remoto de base de datos bibliotecarios se puede abstraer
 * razonablemente bien mediante un array de objetos de clase Libro.java en
 * combinacion con la tecnologia RMI. Escriba esa clase e implante su B.D.
 * con un array de objetos de la misma. Escriba ahora un servidor RMI en
 * java que permita a los clientes insertar y extraer informacion de la B.D.
 * de referencias bibliograficas. En concreto, los clientes deberian poder 
 * insertar, extraer y consultar datos. Escriba una arquitectura RMI completa 
 * para resolver el problema. Guarde sus ficheros en iLibros.java, cLibros.java 
 * y sLibros.java.
 * 
 * @autor Andrés Gomar Pérez
 */

import java.rmi.Remote;
import java.rmi.RemoteException;
import java.util.ArrayList;

public interface iLibros extends Remote{
   
    /**
     * Metodo que inserta libros 
     * @param lib Libro a insertar
     * * @throws RemoteException
     */
    public void insertar(Libro lib) throws RemoteException;
    
    /**
     * Metodo que elimina un libro
     * @param ISBN Codigo unico del libro a extraer
     * @return Devuelve si se ha extraido correctamente
     * @throws RemoteException
     */
    public boolean extraer(String ISBN) throws RemoteException;
    
    /**
     * Metodo que consulta un libro
     * @param opc Opcion para buscar por campo determinado
     * @param texto Texto a consultar
     * @return Devuelve lista de libros que coinciden con el texto
     * @throws RemoteException
     */
    public ArrayList<Libro> consultar(int opc, String texto) throws RemoteException;
    
}
