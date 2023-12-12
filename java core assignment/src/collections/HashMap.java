package collections;

import java.util.*;

public class HashMap {

    // Main Method
    public static void main(String args[]) {
        // Creating HashMap
        java.util.HashMap<Integer, String> hashMaps = new java.util.HashMap<Integer, String>();

        hashMaps.put(1, "Geeks");
        hashMaps.put(2, "For");
        hashMaps.put(3, "Geeks");

        // Finding the value for a key
        System.out.println("Value for 1 is " + hashMaps.get(1));

        for (Map.Entry<Integer, String> e : hashMaps.entrySet())
            System.out.println(e.getKey() + " " + e.getValue());
    }
}
