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

import java.io.Serializable;

public class Libro implements Serializable {
    
    private String autor;
    private String titulo;
    private int year_edic; //Año edicion
    private String editorial;
    private String ISBN;
    
    /**
     * Metodo Constructor sobrecargado
     */
    public Libro(String autor, String titulo, int year_edic, 
            String editorial, String ISBN)
    {
        this.autor = autor;
        this.titulo = titulo;
        this.year_edic = year_edic;
        this.editorial = editorial;
        this.ISBN = ISBN;
    }
    
    //OBSERVADORES
     /**
     * Metodo observador 
     * @return Devuelve nombre del autor en String
     */
    public String getAutor(){ return autor; }
    
     /**
     * Metodo observador 
     * @return Devuelve titulo del libro en String
     */
    public String getTitulo(){ return titulo; }
    
     /**
     * Metodo observador 
     * @return Devuelve año de edicion en Entero
     */
    public int getYear(){ return year_edic; }
    
     /**
     * Metodo observador 
     * @return Devuelve editorial del libro en String
     */
    public String getEditorial(){ return editorial; }
    
     /**
     * Metodo observador 
     * @return Devuelve ISBN del libro en String
     */
    public String getISBN(){ return ISBN; }
    
    
    //MODIFICADORES
    
    /**
     * Metodo que modifica el nombre del autor
     * @param aut Autor
     */
    public void modAutor(String aut){ autor = aut; }
    
    /**
     * Metodo que modifica el titulo del libro
     * @param tit Título
     */
    public void modTitulo(String tit){ titulo = tit; }
    
    /**
     * Metodo que modifica el año de edicion
     * @param year Año de edición
     */
    public void modYear(int year){ year_edic = year; }
    
    /**
     * Metodo que modifica la editorial del libro
     * @param edit Editorial
     */
    public void modEditorial(String edit){ editorial = edit; }
    
    /**
     * Metodo que modifica el ISBN del libro
     * @param ISBN_ Codigo del libro
     */
    public void modISBN(String ISBN_){ ISBN = ISBN_; }
       
    
}
