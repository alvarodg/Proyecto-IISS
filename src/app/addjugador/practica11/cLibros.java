/**
 * Practica 11
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
import java.util.Scanner;
import java.util.*;

public class cLibros {
    
    static Scanner entrada = new Scanner(System.in);
    static ArrayList<Libro> libros = new ArrayList();
    static iLibros ObjetoRemoto;
    
    /**
     * Metodo que pide los datos necesarios de un libro para insertarlo en 
     * la base de datos remota.
     * @throws Exception
     */
    private static void insertar() throws Exception
    {
        System.out.println("Inserta Autor: ");
        String autor = entrada.next();
        System.out.println("Inserta Titulo: ");
        String titulo = entrada.next();
        System.out.println("Inserta Fecha edicion: ");
        int year = entrada.nextInt();                
        System.out.println("Inserta Editorial: ");
        String editorial = entrada.next();
        System.out.println("Inserta ISBN: ");
        String ISBN = entrada.next();

        //Se añade nuevo libro
        ObjetoRemoto.insertar(new Libro(autor, titulo, year, editorial, ISBN));
    }
    
    /**
     * Metodo que pide el ISBN para extraer un libro de la base de datos remota.
     * @throws Exception
     */
    private static void extraer() throws Exception
    {
        System.out.print("Para borrar es necesario insertar el ISBN, "
                            + "¿desea consultar el ISBN del libro antes? (S/N):");
        String respuesta = entrada.next();

        if(respuesta.toLowerCase().equals("s"))
            consultar();
        else
        {
            System.out.print("Inserte el ISBN del libro a borrar: ");
            String ISBN = entrada.next();
            if(ObjetoRemoto.extraer(ISBN))
                System.out.println("El libro se ha borrado correctamente");
            else
                System.out.println("El libro no existe o ya se ha borrado");
        }
    }
    
    /**
     * Metodo que consulta libros de la base de datos remota.
     * @throws Exception
     */
    private static void consultar() throws Exception
    {
        System.out.println("Consultar por: ");
        System.out.println("\t 1 - Autor \n\t 2 - Titulo \n\t "
                + "3 - Fecha edicion \n\t 4 - Editorial \n\t 5 - ISBN");
        System.out.print("Elija opcion: ");
        int opcion = entrada.nextInt();

        System.out.println();
        System.out.println("Inserta el texto: "); //Texto a buscar
        String texto = entrada.next();

        libros = ObjetoRemoto.consultar(opcion, texto);

        if(!libros.isEmpty()) //Se comprueba si hay libros
        {
            System.out.println("Lista: ");
            for(int i=0; i < libros.size(); i++)
            {
                System.out.println("\t ISBN: " + libros.get(i).getISBN()
                + "\n\t Autor: " + libros.get(i).getAutor()
                + "\n\t Titulo: "+libros.get(i).getTitulo()
                + "\n\t Fecha edicion: "+libros.get(i).getYear()
                + "\n\t Editorial: "+libros.get(i).getEditorial());
                System.out.println("\n");
            }
        }
        else
            System.out.println("No se han encontrado coincidencias");

    }

    /**Metodo principal
     * @param args Argumentos de la linea de comandos
     * @throws Exception
     */ 
    public static void main(String[] args) throws Exception
    {
        
        ObjetoRemoto = (iLibros)Naming.lookup("//localhost/Servidor");        
        int opc = 0;
        
        do{  
            System.out.println("\n Menu: ");
            System.out.println("\t 1 - Insertar \n\t 2 - Borrar "
                    + "\n\t 3 - Consultar \n\t 0 - Salir");
            System.out.print("Elija opcion: ");
            opc = entrada.nextInt();
                                   
            System.out.println();
            
            switch(opc){
                case 1: 
                    insertar(); break;
                case 2: 
                    extraer(); break;
                case 3: 
                    consultar(); break;
                case 0:     
                    System.out.println("Saliendo..."); break;
                default:
                    System.out.println("Opcion invalida");
            }
        }while(opc != 0);
    }
}
