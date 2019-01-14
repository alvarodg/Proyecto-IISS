
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

import java.rmi.Naming;
import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;
import java.util.ArrayList;
import java.util.Scanner;

public class sLibros extends UnicastRemoteObject implements iLibros {
    
    static Scanner entrada = new Scanner(System.in);
    public static ArrayList<Libro> Libros = new ArrayList();
    
    /**
     * Metodo Constructor
     */
    public sLibros() throws RemoteException{
        super();
    }
    
    /**
     * Metodo que inserta un libro.
     * @param lib Libro a insertar
     * @throws RemoteException
     */
    synchronized public void insertar(Libro lib) throws RemoteException
    {
        Libros.add(lib);
    }
    
    /**
     * Metodo que extrae un libro.
     * @param ISBN Codigo del libro a extraer
     * @return Devuelve si se ha extraido correctamente el libro
     * @throws RemoteException
     */
    synchronized public boolean extraer(String ISBN) throws RemoteException
    {
        int codigo = -1;
        for(int i=0; i<Libros.size(); i++)
        {
            if(Libros.get(i).getISBN().equals(ISBN))
                codigo = i;
        }
        if(codigo != -1)
        {
            Libros.remove(codigo);
            return true;
        }
        else
            return false;        
    }
    
    /**
     * Metodo que consulta libros.
     * @param opc Opcion para buscar por campo determinado
     * @param texto Texto a consultar
     * @return Devuelve lista de libros que coinciden con el texto
     * @throws RemoteException
     */
    synchronized public ArrayList<Libro> consultar(int opc, String texto) throws RemoteException
    {
        ArrayList resul = new ArrayList();
        switch(opc)
        {
            case 1: //autor
            {
                for(int i = 0; i < Libros.size(); i++)
                {   
                    if(Libros.get(i).getAutor().contains(texto))
                        resul.add(i);
                }
                break;
            }   
            case 2: //titulo
            {
                for(int i = 0; i < Libros.size(); i++)
                {   
                    if(Libros.get(i).getTitulo().contains(texto))
                        resul.add(i);
                }
                break;

            }
            case 3: //año
            {
               int year = entrada.nextInt();
                
               for(int i = 0; i < Libros.size(); i++)
               {
                   if(Libros.get(i).getYear() == (int)year)
                      resul.add(i);
               } 
               break;
            }
            case 4: //Editorial
            { 
                for(int i = 0; i < Libros.size(); i++)
                {   
                    if(Libros.get(i).getEditorial().contains(texto))
                       resul.add(i);
                }
                break;
            }    
            case 5: //ISBN
            { 
                for(int i = 0; i < Libros.size(); i++)
                {   
                    if(Libros.get(i).getISBN().contains(texto))
                       resul.add(i);
                }
                break;
            } 
            default:
                System.out.println("Opcion invalida");
        }
        
        return resul;
    }
    
     /**Metodo principal
     * @param args Argumentos de la linea de comandos
     * @throws Exception
     */
    public static void main(String[] args) throws Exception
    {
        sLibros servidor = new sLibros();
        Naming.bind("Servidor", servidor);
        System.out.println("Servidor Remoto Preparado");
    }
}
