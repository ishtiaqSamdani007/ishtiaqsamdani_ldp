import java.lang.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class VampireNumbers {

    // function to get the required fangs of the vampire number
    static Pair<String, String> getFangs(String num_str) {

        // to get all possible orderings of order that is equal to the number of digits of the vampire number
        List<String> num_vec = new ArrayList<>();
        for (char c : num_str.toCharArray()) {
            num_vec.add(String.valueOf(c));
        }
        Collections.sort(num_vec);
        do {
            String x_str = "", y_str = "";
            for (int i = 0; i < num_str.length() / 2; i++) {
                x_str += num_vec.get(i);
            }
            for (int i = num_str.length() / 2; i < num_str.length(); i++) {
                y_str += num_vec.get(i);
            }

            // if numbers have trailing zeroes then skip
            if (x_str.charAt(x_str.length() - 1) == '0' && y_str.charAt(y_str.length() - 1) == '0') {
                continue;
            }

            // if x * y is equal to the vampire number then return the numbers as its fangs
            if (Integer.parseInt(x_str) * Integer.parseInt(y_str) == Integer.parseInt(num_str)) {
                return new Pair<>(x_str, y_str);
            }
        } while (Collections2.nextPermutation(num_vec));

        return new Pair<>("", "");
    }

    // function to check whether the given number is vampire or not
    static boolean isVampire(int m_int) {

        // converting the vampire number to string
        String n_str = Integer.toString(m_int);

        // if no of digits in the number is odd then return false
        if (n_str.length() % 2 == 1) {
            return false;
        }

        // getting the fangs of the number
        Pair<String, String> fangs = getFangs(n_str);
        if (fangs.first.isEmpty() && fangs.second.isEmpty()) {
            return false;
        }
        return true;
    }

    // main driver program
    public static void main(String[] args) {
        int count =0;
        for (int test_num = 10; count < 100 ; test_num++) {
            if (isVampire(test_num) && ((int)Math.log10(test_num)+1)%2==0 ) {
                System.out.println(test_num + ", ");
                count+=1;
            }
        }
        //      System.out.println((int)Math.log10(12345)+1);
//        System.out.println(n);
    }

    // helper class to return a pair of values
    static class Pair<U, V> {
        public final U first;
        public final V second;

        private Pair(U first, V second) {
            this.first = first;
            this.second = second;
        }
    }

    // helper class to get next permutation of list of strings
    static class Collections2 {
        static boolean nextPermutation(List<String> list) {
            int i = list.size() - 2;
            while (i >= 0 && list.get(i).compareTo(list.get(i + 1)) >= 0) {
                i--;
            }
            if (i < 0) {
                return false;
            }
            int j = list.size() - 1;
            while (list.get(j).compareTo(list.get(i)) <= 0) {
                j--;
            }
            Collections.swap(list, i, j);
            Collections.reverse(list.subList(i + 1, list.size()));
            return true;
        }
    }
}
