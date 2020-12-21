---
title: Game Theory Notes
subtitle: ECON 3503
date: 20/10/2020
author: Scott Belcher
layout: file
---
# Week 1 - Strategies, Beliefs and Expected Payoffs

  - Definitions
    - Non-Cooperative Games
      - Games in which the players compete against each other to maximise their utility without directly communicating.
    - Strategy
      - A **complete** contingency plan for a game.
      - This means that every possible outcome must be accounted for.
    - Strategy Profile
      - The set of available strategies for all players that fully specifies all actions in a game.
      $$S = \{ ABC, DEF \}$$
        - where $$s_1 = \{ABC\}$$ and $$s_2 = \{DEF\}$$
    - Mixed Strategy
      - A strategy set that involves playing one strategy some of the time and another strategy (or strategies) the rest of the time.
      - *"A probability distribution over a strategy space"*
      - Denoted by $$\sigma_i$$ for each player $$i$$.
    - Extensive Form
      - The tree form of a game that denotes the order in which moves are played. Offers more information about the game and allows calculation of subgame perfect Nash Equilibriums.
    - Normal Form:
      - The table form of a game, that denotes all the complete strategies of each player and the payoffs for each. Useful for calculating Best Responses as it is easy to compare payoffs.
    - Expected Utility Graph
      - Give the probability of another player's strategy being played (in a mixed strategy context), what is the expected payoff?
        - Y axis: Expected Utility
        - X axis: probability $$p$$ or $$q$$
    - Simultaneous Decision
      - Denoted by a dotted line between two nodes, which denotes that the player has not observed the previous player's decision.
        - This can be because they move simultaneously, or because a player was unable to see the opponent's move.


# Week 2 - Dominance, Rationalisability and Best Response

  - Definitions
    - Dominant Strategy
      - The most advantageous set of decisions regardless of the opponent's decisions.
      - Indifference precludes dominance.
      - A mixed strategy may dominate a pure strategy.
    - Best Response
      - The most advantageous response to an opponent's decision.
      - Requires an assumption of a prior move.
      - Any undominated strategy is a Best Response to something.
    - Rationalisability
      - The likelihood of your opponent choosing a certain set of decisions based on assumptions about your opponent (they are utility maximising etc.)
      - Requires analysis of your opponents decisions which can then inform your own decision process.
      - This allows a player to eliminate *(not dominate)* strategies
        - These strategies are "iteratively dominated".


# Week 3 - Nash Equilibrium

  - Definitions
    - Nash Equilibrium
      - A strategy profile for which there is no better alternative for either player, thus giving them no incentive to deviate.
      - Only used for Normal Form games.
    - Mixed Strategy Nash Equillibrium
      - A Nash Equilibrium involving a mixed strategy.
      - Only used when you are indifferent between two strategies (ie. neither dominate the other)
  - Best Response Graphs
    - Demonstrate the optimal moves for each player given values of $$p$$ and $$q$$.
    - Requires a $$2 * 2$$ normal form game - so using Dominance and Rationalisability to eliminate strategies is useful.

    | 1\2 | $$q$$ // $$X$$ | $$(1-q)$$ // $$Y$$ |
    |-|-|-|
    | $$p$$ // $$A$$ | | |
    | $$1-p$$ // $$B$$ | | |


      - When $$p = 1$$, Player 1 is only playing option $$A$$
      - When $$p = 0$$, Player 1 is only playing option $$B$$
  - Process
      1. Find $$BR_1 (\sigma_2)$$, and find values of $$q$$ where $$P_1$$ plays each strategy and $$\sigma_1$$
      2. Repeat for $$BR_2 (\sigma_1)$$
      3. Graph the Best Responses
      4. Find the intercepts - these are Nash Equilibriums (including $$0,0$$ and $$1,1$$ if applicable)
      5. Record the Nash Equilibrium(s)


# Week 4 - Backward Induction and Subgame Perfection

  - Definitions
    - Backward Induction
      - Evaluate the Best Response for each subgame, starting at the final move and working backwards.
      - Only applicable to Extensive Form games.
    - Subgame Perfect Nash Equilibrium
      - The Nash Equilibrium that is sequentially rational (and therefore denotes the optimal decisions) over the entire game, as well as each individual subgame.
      - Identified using Backwards Induction
      - If there is a node where a player is uncertain of the previous player's move, a normal form must be created for that subgame to identify the Nash Equilibrium for that subgame, which can then be used to complete the Backwards Induction process.
      - If there is a node at which a player is indifferent between two decisions, evaluate both by splitting the process. (use $$[A], [B]$$ etc.).


# Week 5 - Games with Continuous Strategies

  - Definitions
    - Continuous Strategies
      - A strategy for which a player make choose any response on a continuum of options, rather than choosing between discrete options.
      - Players will choose the strategy that maximises their utility.
    - Cournot Games
      - A game in which two players both have continuous strategies, and neither player observes the other.
      - Provides a Nash Equilibrium.
    - Stackelberg Game
      - A game in which two players both have continuous strategies, but the second player observes the first.
      - Provides a *Subgame Perfect Nash Equilibrium*.
  - Solving Cournot Games
    - Find the Best Response for both players:
      - ie. The utility function for $$P_1$$ and $$P_2$$
        - This may be a profit function $$\pi_1 = P(Q)*q_1 - MC*q_1$$ where $$Q = \sum_i q_i$$
    - Maximise this function by finding the first derivative, setting that to $$0$$ and finding the maximising value $$P_1$$ can choose (Best Response)
      - Repeat for $$P_2$$
      - These will likely be contingent on the other player's move (ie. $$q_1 = 10 + q_2$$)
    - Substitute one Best Response function into the other to solve.
  - Solving Stackelberg Games
    - As the players do not move simultaneously, these games must be evaluated differently using Backwards Induction
    - Find the final player's Best Response function (as above)
    - Substitute this into the previous player's *utility function* (not Best Response)
    - Find the first derivative of this function, maximise it and find this player's utility maximising decision.
    - Then return to the final player's Best Response function and use the previous player's decision to find the final player's best response.


# Week 6 - Nature and Bayesian Nash Equilibrium

  - Definitions
    - Nature
      - A 'player' who introduces uncertainty into games.
      - Nature is random and does not maximise utility - merely acts - thus nature has no payoffs.
      - Nature is often the first 'player' but does not need to be.
    - Bayesian Form
      - A representation of a game with nature that accounts for the uncertainty of nature.
      - Similar to a normal form game in layout.


      | | $$L$$ | $$R$$ |
      | - | - | - |
      | $$UU'$$ | $$x$$,1 | 2,1 |   
      | $$UD'$$ | 4,1 | 4,2 |
      | $$DU'$$ | 3,4 | 2,3 |
      | $$DD'$$ | 1,3 | 2,2 |

      - $$U$$ represents playing $$U$$ when Nature acts one way, $$U'$$ the other.
      - $$x = p[U_1(UL)] + (1-p)[U_1(UL)]$$, where $$p$$ is the chance nature acts one way.
      - In this example, Player 2 does not know Nature's move, but Player 1 does
        - if neither observed Nature, you would have a 2 x 2 grid.
        - if both observed Nature, you would have a 4 x 4 grid.
  - Solving Bayesian Nash Equilibrium
    - Transform a game into a Bayesian Form
      - This will require finding each payoff using the probabilities of Nature $$p$$, $$1-p$$
    - If you have a value of $$p$$, solve the game using Domination, Best Response and Rationalisability principles.
    - If you do not have a value for $$p$$, find values for which one of the non-observing players strategies always dominates the other.
  - Solving Cournot games with Bayesian Uncertainty
    - In this situation, one or more players will have a variable in the utility function that depends on the outcome of Nature.
    - The player with the variable $$t$$ in their utility function $$P_n$$:
      - Derive their utility function, but don't maximise yet.
      - Split $$\partial U_n(x_i)$$ into two parts: $$\partial U_n(x^{t=a}_i)$$ and $$\partial U_n(x^{t=b}_i)$$ and substitute the relevent values for $$t$$
      - Maximise these functions and get the Best Response function.
    - The player *without* the variable $$t$$ in their utility function $$P_m$$:
      - Split $$U_m$$ into:
        $$ U_m = p[U_m(x_i^{t=a})] + (1-p)[U_m(x_i^{t=b})]$$
      - Derive this function and maximise
      - Substitute in the variables and solve.
    - Then, solve for $$P_n$$


# Week 7 - Perfect Bayesian Equilibrium

  - Definitions
    - Perfect Bayesian Equilibrium
      - Used for solving signalling games.
      - Based on "beliefs on decision node on or off the equilibrium path"
      - Requires:
        1. A set of beliefs of the decisions nodes of the information sources
        2. Sequential Rationality
        3. Strategies that are in line with the players' Beliefs
        4. Beliefs of the equilibrium path that are consistent with the equilibrium and provide incentive not to deviate from the equilibrium.
    - Signalling Games
      - Games where players will decide how to act based on their interpretation of what the previous players' move implies about the state of Nature.
  - Solving Signalling Games
    - $$P_1$$ will either Pool or Separate Moves
      - Pool: Play the same move at both states of nature eg. $$A_{t=a} A_{t=b}$$
      - Separate: Play different moves depending on each state of nature eg.$$A_{t=a} B_{t=b}$$
    - They will then evaluate $$P_2$$'s Best Response to each move.
      - For Pooled Strategies, this will be based on the utility at each node multiplied by the probability of nature being in that state.

      $$U_2(X) = 3q + 4(1-q)$$

      $$U_2(Y) = 2q + 5(1-q)$$


        - If $$q$$ is known, simply solve and determine the BR
        - If $$q$$ in unknown, find values of $$q$$ for which $$P_2$$ will play X
      - For Separating Strategies, this will simply be based on the utility of each response at the relevant node.
        - $$P_2$$ can use the signal of $$P_1$$'s move to determine which state of nature they are in.
    - Once the Best Response is determined, $$P_1$$ will decide whether or not to deviate from their strategy and send the wrong signal.
      - Because $$P_2$$ acts based on their assumption of Nature from $$P_1$$, $$P_1$$ can opt to play another strategy that would ordinarily not be utility maximising, but due to $$P_2$$'s lack of information achieves a higher utility than $$P_1$$ would otherwise be able to achieve.
      - To test whether $$P_1$$ will deviate, set up a table:
        - Separating Equilibrium:

      | | |$$A_{t=a} B_{t=b}$$ |Deviate: $$B_{t=a} A_{t=b}$$ |
      |-|-|-|-|
      |$$U_1$$  |$$t=a$$ | $$U_1(A_{t=a}, BR_2(A_{t=a}))$$ | $$U_1(B_{t=a}, BR_2(A_{t=a}))$$|
      |       |$$t=b$$ | $$U_1(B_{t=b}, BR_2(B_{t=b}))$$| $$U_1(A_{t=b}, BR_2(B_{t=b}))$$|

        - Pooling Equilibrium where $$q$$ is not given:

        |       |      |$$A_{t=a} A_{t=b}$$               ||Deviate: $$B_{t=a} B_{t=b}$$    ||
        |-|-|-|-|-|-|
        |       |      | $$q\ge \alpha$$                  | $$q< \alpha$$ |$$q\ge \alpha$$                  | $$q< \alpha$$ |
        |$$U_1$$  |$$t=a$$ | $$U_1(A_{t=a}, BR_2(A_{t=a}))$$  | $$U_1(A_{t=a}, BR_2(A_{t=a}))$$| $$U_1(B_{t=a}, BR_2(A_{t=a}))$$| $$U_1(B_{t=a}, BR_2(A_{t=a}))$$|
        |       |$$t=b$$ | $$U_1(A_{t=b}, BR_2(A_{t=b}))$$  | $$U_1(A_{t=b}, BR_2(A_{t=b}))$$| $$U_1(B_{t=b}, BR_2(A_{t=b}))$$| $$U_1(B_{t=b}, BR_2(A_{t=b}))$$|

      - If there is *any* incentive to deviate, there is not a Perfect Bayesian Equilibrium.
        - If there is no incentive to deviate in a Pooling Equilibrium for a certain value or range of $$q$$, then there is a PBE - but you *must* include the values of $$q$$ in the PBE notation
          - ie. $$PBE = \{ (A_{t=a}A_{t=b}, X), q \ge \alpha \}$$


# Week 8 - Midterm - No Content


# Week 9 - Repeated Games

  - Definitions
    - Finite Games:
      - Games that are played a limited number of times
      - These do not include a discount factor in this course
    - Infinitely Repeated Games
      - Games that are repeated Infinitely
      - These games involve a discount factor $$\delta \in (0,1)$$ that represents the PV of a FV.
    - Grim Trigger strategy
      - Strategy for infinitely repeated Games
      - If a player deviates from the NE (in order to achieve a higher payoff for one iteration of the game) then the Grim Trigger strategy shifts to a 'punishment'
  - Discount Factor Proof
    - For an infinitely repeated game, the series of payoffs:
      $$ S = \sum^\omega_{n=0} \delta^n = 1 + \delta^1 +\delta^2 +\delta^3 + ... + \delta^n $$
      can be written
      $$ S = \frac{1}{1- \delta^2}$$
    - Proof:

      $$ S = 1 +  \delta^1 +  \delta^2 +  \delta^3 + ...  $$

      $$ S=  1 +  \delta(1 +  \delta^1 +  \delta^2 +  \delta^3 + ... )$$

      $$ S = 1 + \delta(S) $$

      $$ S - \delta(S) = 1$$

      $$ S(1- \delta) = 1$$

      $$ S = \frac{1}{1- \delta}$$

    - For strategies that alternate, simply set the series up as $$S = 1 + \delta^2 + \delta^4$$ etc.
      - Note that the 'odd' move would require a discount of $$\delta S$$
      - eg. $$U = \alpha S + \beta \delta S$$
  - Grim Trigger Decision
    - Is it worth deviating once and then suffering the punishment, or sticking with the agreed strategy?
    - This will depend on the discount factors.
    - Say there is a steady strategy that gives $$P_1$$ a utility $$U = 3$$, and alternate payoff $$U=6$$ and a Grim Trigger punishment $$U=1$$
      - If $$U_{Steady} < $$U_{Deviate}$$ then $$P_1$$ will deviate.

      $$U_{Steady} = 3 \frac{1}{1- \delta}$$

      $$U_{Deviate} = 6 + 1 \frac{1}{1- \delta}$$

      - If you have defined values for $$\delta$$, you can solve to find whether $$P_1$$ sticks or twists
      - If not, you can solve for $$\delta$$ to find the discount factor that would make $$P_1$$ deviate.
  - Single Repeated Games
    - If there is a single NE, the Nash Profile will be played both times.
    - If there are two NE, either can be played at $$t=1$$ or $$t=2$$
    - There is a possibility that two players could play a non-NE profile at $$t=1$$, then revert to a NE profile at $$t=2$$
      - This requires an incentive and a punishment; incentive for both players to deviate in the first place, and a punishment if either player deviates from the 'agreed upon' set of decisions.
      - If the utility derives from cooperating is more than that for deviating (even when being punished at $$t=2$$) then the cooperation will work.
      - This provides a *Subgame Perfect Nash Equilibrium*
    - A finite game can be solved by using backwards induction;
      - Find the NE to be played in $$t=2$$
      - Add those payoffs to the payoffs for $$t=1$$ (i.e if the payoffs are $$(1,1)$$ add $$1$$ to all the payoffs)
      - If  this changes the NE for $$t=1$$, that will be the Nash profile.


# Week 10 - Bargaining Games

  - Definitions
    - Ultimatum Game
      - A game where $$P_1$$ will make an offer to $$P_2$$, which they will either Accept or Reject
      - The offer is a value of $$m \in [0,1]$$ (usually)
      - If the offer is $$m > 0$$ then $$P_2$$ accepts (as the rejection payoff is usually $$0$$)
      - If the offer is $$m = 0$$ then $$P_2$$ is indifferent between accepting or rejecting
      - Thus there are two sequentially rational strategies:

      $$S_i : \{A, m \ge 0\}$$

        $$S_1 : \{A, m > 0\}$$ and $$\{R, m= 0\}$$

      - Option 2 gives a weird discontinuity at $$m=0$$, as $$m=0$$ is functionally indifferent from $$m=0.01^{\infty}$$, yet they result in different choices - so we use option 1
      - Thus the Nash Equilibrium of an Ultimatum Game is $$(m=0, A)$$
    - Repeated Ultimatum Games
      - One player makes an offer to the other, the other Accepts or Rejects. If they Reject, they can make a counteroffer.
      - There is generally a discount factor $$\delta$$ applied to the second offer (and those thereafter).
  - Solving Bargaining games
    - Use Backward induction
      - What is the final player's best move?
        - For a single game, this is accept even for $$m=0$$, so the first player will offer them $$m=0$$.
        - For a repeated game, (in this case, repeated twice) the final offer will be $$m_2=0$$
          - Meaning the offering player would receive $$U= \delta (1-m_2) = \delta$$
        - If the receiving player wants to receive a higher utility than $$U=0$$, they must offer $$m_1 = \delta$$
          - Thus they would receive $$1 - m_1 = 1 - \delta$$
  - Infinite Periods
    - Consider a scenario $$P_2$$ faces. They can Accept and receive $$m_2$$ or Reject and receive $$\delta(1-m_1)$$
    - For $$P_2$$ to be indifferent between accepting or rejecting, $$U_A = U_R$$, thus $$m_2 = \delta(1-m_1)$$
      - The reverse must also be true for $$P_1$$, as they're infinitely repeating this game.
    - Thus $$m_1 = \delta(1-m_2)$$
      - Given we know $$m_2$$, we can say:

       $$m_1 = \delta (1 - \delta(1-m_1))$$

       $$\frac{m_1}{\delta} = 1 - \delta + \delta m_1 $$

       $$m_1 = \delta - \delta^2 + \delta^2 m_1 $$

       $$m_1 - \delta^2 m_1 = \delta - \delta^2  $$

       $$m_1(1 - \delta^2) = \delta - \delta^2  $$

       $$m_1 = \frac{\delta - \delta^2}{(1 - \delta^2)}  $$

       $$m_1 = \frac{\delta (1 - \delta)}{(1 - \delta^2)}  $$

       $$m_1 = \frac{\delta (1 - \delta)}{(1 + \delta)(1 - \delta)}  $$

       $$m_1 = \frac{\delta}{1 + \delta}  $$

      - If we then derive this as $$\lim\delta \rightarrow 1$$ :

      $$\lim_{\delta\to 1} m = \lim_{\delta\to 1}\frac{1-2\delta}{-2\delta^2} $$

      $$\lim_{\delta\to 1} m = \frac{1-2}{-2} $$

      $$\lim_{\delta\to 1} m = \frac{-1}{-2} $$

      $$\lim_{\delta\to 1} m = \frac{1}{2} $$
      
      - Thus the optimal value of m approaches a 50/50 split on a long enough timeline.
