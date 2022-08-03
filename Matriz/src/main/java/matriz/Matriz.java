/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */

package matriz;

/**
 *
 * @author SENA
 */
public class Matriz {

    public static void main(String[] args) {
      String nombres [][]=new String [3][3];
      
      nombres [0][0]= "David";
      
      nombres [0][1]= "Carlos";
      
      nombres [0][2]= "Sofia";
      
      nombres [1][0]= "Valeria";
      
      nombres [1][1]= "Lupe";
      
      nombres [1][2]= "Rosa";
      
      nombres [2][0]= "Andrea";
      
      nombres [2][1]= "Jose";
      
      nombres [2][2]= "Juan";
      
      System.out.print("["+nombres [0][0]+"]");
      System.out.print("["+nombres [0][1]+"]");
      System.out.println("["+nombres [0][2]+"]");
      System.out.print("["+nombres [1][0]+"]");
      System.out.print("["+nombres [1][1]+"]");
      System.out.println("["+nombres [1][2]+"]");
      System.out.print("["+nombres [2][0]+"]");
      System.out.print("["+nombres [2][1]+"]");
      System.out.print("["+nombres [2][2]+"]");
    }
}
