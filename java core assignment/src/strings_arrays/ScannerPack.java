package strings_arrays;
import tools.Calc;

import java.util.Scanner;


public class ScannerPack {
    public static void main(String[] args) {
        Scanner myObj = new Scanner(System.in);
        String userName;
        // Enter username
        System.out.println("Enter username : ");
        userName = myObj.nextLine();
        System.out.println("Username is: " + userName);
        Calc obj=new Calc();
        System.out.println(obj.add(3,8));
    }
}
