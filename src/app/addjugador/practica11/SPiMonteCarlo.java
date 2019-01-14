/**
 * Practica 11 - Ejercicio 3
 * Se desea efectuar el calculo remoto de la aproximacion a pi mediante el ya 
 * conocido metodo de Monte-Carlo. Para desarrollar esta aproximacion distribuida,
 * un cliente RMI enviara una peticion remota al servidor que efectua el calculo,
 * indicandole con cuantos puntos contribuye al mismo. Diferentes cliente podran,
 * mediante sus respectivas llamadas al servidor, contribuir a mejorar la 
 * aproximacion remota, que sera unica y de precision creciente. El servidor 
 * debera ofrecer tambien un metodo de reset(), que cualquier cliente podra 
 * invocar para reiniar el calculo. Escriba una arquitetura RMI completa con 
 * ficheros. iPiMonteCarlo.java, CPiMonteCarlo.java y SPiMonteCarlo.java.
 * 
 * @author Andrés Gomar Pérez
 */

import java.rmi.*;
import java.rmi.server.*;
import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;

public class SPiMonteCarlo extends UnicastRemoteObject implements iPiMonteCarlo{
    
    private static AtomicLong puntos = new AtomicLong(0);
    
    /**
     * Metodo constructor
     * @throws RemoteException 
     */
    public SPiMonteCarlo() throws RemoteException
    {
        super();
        reset();
    }
    
    /**
     * Metodo que establece a 0 el numero de puntos para la precision.
     * @throws RemoteException 
     */
    public final void reset() throws RemoteException
    {
        puntos.set(0);
    }
    
    /**
     * Metodo que inserta un numero de puntos a los ya existentes.
     * @param pnts Puntos de precision
     * @return Devuelve el resultado del calculo
     * @throws RemoteException 
     */
    public double nPuntos(long pnts) throws RemoteException
    {
        puntos.addAndGet(pnts);
        int cont = 0, i = 0;
                
        while(i < pnts) //Bucle que genera y cuenta los puntos dentro del circulo
        {
            //En cada iteracion se genera un punto aleatorio
            double x = Math.random(); 
            double y = Math.random();
            if ((x*x + y*y) <= 1) //Cuenta los puntos dentro del circulo
                cont++;
            i++;
        }
        
        return 4.0 * cont / pnts;
    }
    
     /**Metodo principal
     * @param args Argumentos de la linea de comandos
     * @throws Exception
     */
    public static void main(String [] args) throws Exception
    {
        SPiMonteCarlo servidor = new SPiMonteCarlo();
        Naming.bind("Servidor", servidor);
	System.out.println("Servidor Remoto Preparado");
    }	   	
}
