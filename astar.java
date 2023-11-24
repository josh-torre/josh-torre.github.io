import java.lang.reflect.Array;
import java.util.*;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import java.util.stream.Collectors;
public class astar {

    public static void main(String[] args)
        {
            Simulation s = new Simulation();
        }
    }


    class Simulation
    {
        Board b;
        Window f;
        boolean isRunning;
        boolean showClosedList;
        Tile startTile;
        Tile goalTile;
        ArrayList<Tile> closedList;

        //This initializes some of the variables at the start of the program
        public Simulation()
        {
            isRunning = true;
            b = new Board(100);
            f = new Window(1000,1000);
            showClosedList = true;
            runAStar(true);
        }

        //This method creates a new board of obstacles and then uses A* to find the shortest path
        public void runAStar(boolean useDefaultStartEnd)
        {
            //this portion of code resets the board
            b.resetBoard();
            ArrayList<Tile> openList = new ArrayList<Tile>();
            if(useDefaultStartEnd)
            {
                goalTile = b.board[b.board.length-1][b.board.length-1];
                startTile = b.board[0][0];
            }
            b.setObstaclesFromPercent();
            goalTile.rep = "O";
            startTile.rep = "O";
            closedList = new ArrayList<Tile>();
            closedList.add(startTile);
            openList.add(startTile);
            isRunning = true;
            Tile currentTile = b.board[getSmallestFCostXY(openList)[1]][getSmallestFCostXY(openList)[0]];

            //this loop loops through possible paths, and creates a fastest path
            while(currentTile != goalTile)
            {
                f.p.paintTextOnCenterOfScreen("Running...", 0);

                //this is true when there is no possible path to the end
                if(openList.size() == 0)
                {
                    b.hasPath = false;
                    backTrack(startTile, currentTile);
                    isRunning = false;
                    return;
                }
                currentTile = b.board[getSmallestFCostXY(openList)[1]][getSmallestFCostXY(openList)[0]];

                //this is true when a path is found
                if(currentTile.x == goalTile.x && currentTile.y == goalTile.y)
                {
                    backTrack(startTile, goalTile);
                    b.hasPath = true;
                    isRunning = false;
                    return;
                }

                openList.remove(openList.indexOf(currentTile));
                closedList.add(currentTile);
                openList = addToOpenList(openList, closedList, currentTile, goalTile);
            }
            f.repaint();
        }

        //This function loops through the open list and finds the tile with the lowest cost
        public int[] getSmallestFCostXY(ArrayList<Tile> openList)
        {
            int smallestNum = (int)Math.pow(b.board.length, 2);
            int[] xyOfLowestFcost = new int[2];
            for(int i = openList.size()-1; i >= 0; i--)
            {
                if(openList.get(i).fCost <= smallestNum)
                {
                    smallestNum = openList.get(i).fCost;
                    xyOfLowestFcost = new int[]{openList.get(i).x, openList.get(i).y};
                }
            }

            return xyOfLowestFcost;
        }

        //This function creates a list of tiles which could be used to find the quickest path, and evaluates the cost of that path
        public ArrayList<Tile> addToOpenList(ArrayList<Tile> openList, ArrayList<Tile> closedList, Tile currentTile, Tile goalTile)
        {
            ArrayList<Tile> daughterTiles = new ArrayList<Tile>();
            daughterTiles = makeListOfDaughterTiles(currentTile);
            if(daughterTiles.size() != 0)
            {
                for(int i = 0; i < daughterTiles.size(); i++)
                {
                    Tile daughter = daughterTiles.get(i);
                    if(!closedList.contains(daughter))
                    {
                        int tempG = currentTile.gCost + 1;
                        if(openList.contains(daughter))
                        {
                            if(tempG < daughter.gCost)
                            {
                                daughter.gCost = tempG;
                            }
                        }
                        else{
                            daughter.gCost = tempG;
                            openList.add(daughter);
                        }
                        daughter.hCost = manhattanHeuristic(daughter, goalTile);
                        daughter.fCost = daughter.hCost + daughter.gCost;
                        daughter.previousTile = currentTile;
                        b.board[daughter.y][daughter.x] = daughter;
                    }
                }
            }
            return openList;
        }

        //This function finds the path that the algorithm took to get to the end
        public void backTrack(Tile startTile, Tile tileToBackTrackTo)
        {
            Tile toLookAt = tileToBackTrackTo;
            while(toLookAt != startTile)
            {
                toLookAt.rep = "X";
                Tile tempTile = toLookAt.previousTile;
                toLookAt = tempTile;
            }
            startTile.rep = "X";
            f.repaint();
        }

        //This method resets the board with new Obstacles
        public void setBoardWithRandomObstacles(int numberOfObstacles)
        {
            for(int i = 0; i < numberOfObstacles; i++)
                b.board[(int)(Math.random() * b.board.length)][(int)(Math.random() * b.board.length)].rep = "#";
        }

        //This method creates a list of possible tiles the algorithm could go to next
        public ArrayList<Tile> makeListOfDaughterTiles(Tile currentTile)
        {
            ArrayList<Tile> daughterTiles = new ArrayList<Tile>();
            if(currentTile.y + 1 != b.board.length && !b.board[currentTile.y+1][currentTile.x].rep.equals("#"))
            {
                daughterTiles.add(b.board[currentTile.y+1][currentTile.x]);
            }
            if(currentTile.y - 1 != -1  && !b.board[currentTile.y-1][currentTile.x].rep.equals("#"))
            {
                daughterTiles.add(b.board[currentTile.y-1][currentTile.x]);
            }
            if(currentTile.x + 1 != b.board.length  && !b.board[currentTile.y][currentTile.x+1].rep.equals("#"))
            {
                daughterTiles.add(b.board[currentTile.y][currentTile.x+1]);
            }
            if(currentTile.x - 1 != -1 && !b.board[currentTile.y][currentTile.x-1].rep.equals("#"))
            {
                daughterTiles.add(b.board[currentTile.y][currentTile.x-1]);
            }
            return daughterTiles;
        }

        //This algorithm uses the manhattan distance heuristic to find the distance from a tile to another tile
        public int manhattanHeuristic(Tile a, Tile b)
        {
            return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
        }


        // This class is for the window popup
        class Window extends JFrame
        {
            Painting p;
            int height;
            int width;

            //this method initializes the window
            public Window(int h, int w)
            {
                height = h;
                width = w;

                this.setSize(height,width);
                this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                this.setVisible(true);
                this.setBackground(Color.WHITE);
                p = new Painting();
                this.add(p);
                Listener handler = new Listener();
                p.setBackground(Color.WHITE);
                this.addMouseListener(handler);
                this.addMouseMotionListener(handler);
                this.setLocationRelativeTo(null);
            }

            //This method creates the window where you can edit the board
            public void getPopupWindow()
            {
                JFrame popup = new JFrame("Edit");
                JPanel panel = new JPanel();
                popup.setSize(400,300);
                popup.setVisible(true);
                popup.setBackground(Color.WHITE);
                JButton cancelButton = new JButton("Cancel");
                JButton submitDataButton = new JButton("Make Changes");
                JLabel obsticalPercentLabel = new JLabel(" Obsitcal Chance (%) ");
                JLabel numberOfTilesLabel = new JLabel("Number of Tiles");
                JLabel showClosedListLabel = new JLabel("Show the Closed List");
                JTextField obsticalPercentInput = new JTextField((int)(b.percentObstacles * 100)+"");
                JTextField numberOfTilesInput = new JTextField(b.length+"");
                JCheckBox toggleShowClosedList = new JCheckBox("", showClosedList);
                obsticalPercentLabel.setHorizontalAlignment(JLabel.CENTER);
                numberOfTilesLabel.setHorizontalAlignment(JLabel.CENTER);
                showClosedListLabel.setHorizontalAlignment(JLabel.CENTER);
                toggleShowClosedList.setHorizontalAlignment(JCheckBox.CENTER);
                panel.add(obsticalPercentLabel);
                panel.add(obsticalPercentInput);
                panel.add(numberOfTilesLabel);
                panel.add(numberOfTilesInput);
                panel.add(showClosedListLabel);
                panel.add(toggleShowClosedList);
                panel.add(submitDataButton);
                panel.add(cancelButton);
                panel.setLayout(new GridLayout(4,2));
                popup.add(panel);
                popup.pack();
                popup.setVisible(true);
                addActionListeners(cancelButton, submitDataButton, popup, obsticalPercentInput, numberOfTilesInput, toggleShowClosedList);
                popup.setLocationRelativeTo(null) ;
            }

            //This method updates the functions of the various inputs in the edit window
            public void addActionListeners(JButton cancelButton, JButton submitDataButton, JFrame popup,
                                           JTextField obsticalPercentInput, JTextField numberOfTilesInput, JCheckBox showClosedListCheckBox)
            {

                cancelButton.addActionListener(new ActionListener()
                {
                    // The following code is executed when the cancel button on the exit window is clicked
                    public void actionPerformed(ActionEvent e)
                    {
                        popup.dispatchEvent(new WindowEvent(f, WindowEvent.WINDOW_CLOSING));
                    }
                });

                submitDataButton.addActionListener(new ActionListener()
                {
                    // The following code is executed when the submit button on the exit window is clicked
                    public void actionPerformed(ActionEvent e)
                    {
                        try
                        {
                            showClosedList = showClosedListCheckBox.isSelected();
                            b.logDataFromEditWindow(Double.parseDouble(obsticalPercentInput.getText()), Integer.parseInt(numberOfTilesInput.getText()));
                        }
                        catch(java.lang.NumberFormatException err)
                        {          }
                        popup.dispatchEvent(new WindowEvent(f, WindowEvent.WINDOW_CLOSING));
                        runAStar(true);

                    }
                });

            }


            //This class is a listener for when the mouse is clicked
            class Listener extends MouseAdapter
            {
                boolean pickingNewEnd = false;
                @Override
                public void mousePressed(MouseEvent e)
                {
                    int x = e.getX();
                    int y = e.getY();
                    if(!isRunning) {
                        boolean buttonHit = findIfButtonHit(x, y);
                        if (!buttonHit) {
                            int tempX = x - 18;
                            int tempY = (y - 110);
                        }
                    }
                }

                //This method determines if a button was clicked based on where the user clicks their mouse
                public boolean findIfButtonHit(int x, int y)
                {
                    //This checks for the "re run" button
                    if(x > 15 && x < 190 && y > 20 && y < 100)
                    {
                        isRunning = true;
                        b = new Board(100);
                        showClosedList = true;
                        runAStar(true);
                        return true;
                    }
                    //This checks for the "edit" button
                    else if(x > (b.length * p.blockSize)/2-90 && x < (b.length * p.blockSize)/2-90 + 140 && y > 20 && y < 100)
                    {
                        f.getPopupWindow();
                        return true;
                    }
                    else
                        return false;
                }
            }
        }

        //This class is where all of the drawings of the program occur
        class Painting extends JPanel
        {
            int blockSize;

            //this method is what paints on the window
            public void paintComponent(Graphics g)
            {
                //This clears the screen so previous drawings are not shown
                super.paintComponent(g);
                blockSize = (f.height - 140) / b.board.length;

                //this checks if the user wants to show the evaluated tiles
                //WARNING: This will substantially slow down the program
                if(showClosedList)
                    paintAllClosedList(g);

                    paintBoard(g);
                    paintStartAndEnd(g);
                    g.setColor(Color.BLACK);
                    g.drawRect(10,10+70, b.board.length*blockSize, b.board.length*blockSize);
                    if(!isRunning) {
                        if (b.hasPath)
                            paintHeader("Path Found", 265, Color.BLACK, g);
                        else
                            paintHeader("No Path", 180, Color.RED, g);
                        paintButtons(g);
                    }
                    repaint();
            }

            //This method will paint text on the center of the screen
            public void paintTextOnCenterOfScreen(String str, int backOffset)
            {
                Graphics g = getGraphics();
                g.setFont(new Font("TimesRoman", Font.BOLD, 100));
                g.setColor(new Color(0,10,200));
                g.drawString(str, (int)(blockSize*b.board.length*0.5)-backOffset-200,(int)(blockSize*b.board.length*0.5)-backOffset + 60);
            }

            //This method will paint the "Buttons"
            //These are not traditional buttons and work based on the position of mouse clicks
            public void paintButtons(Graphics g)
            {
                g.setColor(new Color(124, 124, 124));
                g.fillRect(10,10,200,60);
                g.fillRect((b.length * blockSize)/2-90, 10, 140, 60);
                g.setColor(Color.WHITE);
                g.setFont(new Font("TimesRoman", Font.BOLD, 50));
                g.drawString("Re-Run", 20,60);
                g.drawString("Edit", (b.length * blockSize)/2-70,60);
            }

            //This method will paint text in the top left of the screen
            public void paintHeader(String str, int backOffset, Color c, Graphics g)
            {
                g.setColor(c);
                g.setFont(new Font("TimesRoman", Font.BOLD, 50));
                g.drawString(str, (blockSize*b.board.length)-backOffset,60);
            }

            //This function will tell the user that there is no possible path between the points
            public void paintNoPath(Graphics g)
            {
                g.setFont(new Font("TimesRoman", Font.BOLD, 50));
                g.drawString("No Path", blockSize*b.board.length-180,60);
            }

            //This function will tell the user that there was a path found
            public void paintPathFound(Graphics g)
            {
                g.setFont(new Font("TimesRoman", Font.BOLD, 50));
                g.drawString("Path Found", blockSize*b.board.length-250,60);
            }

            //This function will paint the starting and ending points
            public void paintStartAndEnd(Graphics g)
            {
                g.setColor(new Color(252, 215, 3));
                g.fillRect(startTile.x * blockSize + 10, startTile.y * blockSize + 10 + 70, blockSize, blockSize);
                g.fillRect(goalTile.x * blockSize + 10, goalTile.y * blockSize + 10 + 70, blockSize, blockSize);
            }

            //This method will paint the obstacles of the board
            public void paintBoard(Graphics g)
            {
                for(int r = 0; r < b.board.length; r++)
                {
                    for(int c = 0; c < b.board.length; c++)
                    {
                        g.setColor(Color.BLACK);

                        //The program uses a string representation of the board to store the information
                        if(b.board[r][c].rep.equals("#"))
                        {
                            g.setColor(Color.BLACK);
                            g.fillRect(c * blockSize + 10, r * blockSize + 10 + 70, blockSize, blockSize);
                        }
                        if(b.board[r][c].rep.equals("X"))
                        {
                            g.setColor(new Color(94, 145, 255));
                            g.fillRect(c * blockSize + 10, r * blockSize + 10 + 70, blockSize, blockSize);
                        }

                    }
                }

            }

            //This function will paint the tiles which are in the closed list with a red dot
            public void paintAllClosedList(Graphics g)
            {
                g.setColor(Color.RED);
                for (int i = 0; i < closedList.size(); i++)
                {
                    g.fillOval(closedList.get(i).x * blockSize + 10, closedList.get(i).y * blockSize + 80, blockSize , blockSize);
                }
            }

        }
    }

    //This class holds the data for each of the tiles on the board
    class Tile
    {
        String rep;
        int fCost, hCost, gCost, x, y;
        Tile previousTile;

        //This method initializes new tiles
        public Tile(int tx, int ty)
        {
            rep = "O";
            fCost = -1;
            gCost = -1;
            hCost = -1;
            x = tx;
            y = ty;
        }
    }

    //This class holds all of the information about the board
    class Board
    {
        boolean hasPath;
        double percentObstacles;
        int length;
        Tile[][] board;

        //This initializes a new board
        public Board(int len)
        {
            percentObstacles = 0.3;
            hasPath = false;
            length = len;
        }

        //This resets the Obstacles of the board
        public void setObstaclesFromPercent()
        {
            int maxNumber = (int)(Math.pow(length, 2) * percentObstacles);
            for(int i = 0; i < maxNumber; i++)
            {
                int randC = (int)(Math.random()*length);
                int randR = (int)(Math.random()*length);
                if(board[randR][randC].rep.equals("#"))
                    i--;
                else
                    board[randR][randC].rep = "#";
            }
        }

        //This will reset the board to its default state(empty)
        public void resetBoard()
        {
            board = new Tile[length][length];
            for(int i = 0; i < board.length; i++)
            {
                for(int t = 0; t < board.length; t++)
                {
                    board[i][t] = new Tile(t, i);
                }
            }
        }

        //This method will take data from the edit window and change the length of the board and the chance of obstacles
        public void logDataFromEditWindow(double percent, int newLength)
        {
            percent *= 0.01;
            if(percent != percentObstacles)
                percentObstacles = percent;
            if(newLength != length)
                length = newLength;
        }

        //This method will print the string representation of the board
        public void printBoard()
        {
            for(int r = 0; r < board.length; r++)
            {
                for(int c = 0; c < board.length; c++)
                {
                    System.err.print(board[r][c].rep + " ");
                }
                System.out.print("\n");
            }
        }
    }
