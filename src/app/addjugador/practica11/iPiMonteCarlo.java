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

public interface iPiMonteCarlo extends Remote {
    
    /**
     * Metodo que establece a 0 el numero de puntos para la precision.
     * @throws RemoteException 
     */
    public void reset() throws RemoteException;
    
    /**
     * Metodo que inserta un numero de puntos a los ya existentes.
     * @param pnts Puntos de precision
     * @return Devuelve el resultado del calculo
     * @throws RemoteException 
     */
    public double nPuntos(long pnts) throws RemoteException;
    
}
