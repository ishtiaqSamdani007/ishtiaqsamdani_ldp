package threads;
public class ThreadCls extends Thread {
    public static void main(String[] args) {
        ThreadCls thread = new ThreadCls();
        thread.start();
        System.out.println("outside of the thread");
    }
    public void run() {
        System.out.println("running in a thread");
    }
}
