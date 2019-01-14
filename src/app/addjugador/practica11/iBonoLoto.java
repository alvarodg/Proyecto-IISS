
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Andrés Gomar Pérez
 */
import java.rmi.*;

public interface iBonoLoto extends Remote{
    
    public int[] generar_sorteo()throws RemoteException;
    public boolean comprobar_numero(int [] cliente)throws RemoteException;
}
