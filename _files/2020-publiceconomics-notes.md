---
title: Public Economics Notes
subtitle: ECON 3508
date: 20/10/2020
author: Scott Belcher
layout: file
---
# Week 1  - Introduction
  - Partial Equilibrium Model
    - A model that only evaluates part of the economy, with other factors held constant
  - General Equilibrium Model
    - A model that evaluates the entire economy, with prices equilibrating supply and demand on all markets simultaneously.
  - Normative Analysis
    - Analysing how things should be to provide the optimal outcome.
  - Positive Analysis
    - Analysing how things are as the currently stand.
  - Price Taking
    - In public economics, it is assumed all participants are price takers - that is, they don't have the requisite market power to set prices, and prices are set at the market clearing level.

# Week 2  - Equilibrium & Efficiency
  - Exchange Economy
    - An economy with $$n \ge 2$$ participants with an initial endowment of goods.
      - Endowments are given:
        $$ \omega^h = \omega^h_1, x^h_2 $$
        for consumer h and goods 1 and 2.
    - The participants can exchange goods with each other to maximise their utilities.
    - The rate of exchange is set by the prices of goods.
    - Consumption Plan: The eventual bundle of goods the participants have after exchanging.
      - Consumption plans are given
      $$ x^h = x^h_1, x^h_2 $$
    - Budget Constraint is the limiting factor of the consumption plan, determined by the prices for each good. The sums of the prices and consumption plan must be equal to the sums of the prices and endowment:
      $$ p_1x^h_1 + p_2x^h_2 = p_1\omega^h_1 + p_2\omega^h_2 $$
    - Equilibrium Prices are such that supply will equal demand (ie. the market clearing price)
      $$ x^1_i(p_1, p_2) + x^2_i(p_1, p_2) = \omega^1_i + \omega^2_i $$
        - for consumers 1,2 and goods $$i$$ = 1,2
  - Price Normalisation
    - One price can be set to = 1, and the other set relative to that price. This simplifies calculations.
  - Walras' Law
    - The total value of the goods supplied will equal the total value of goods demanded.
    - Let excess demand:
        $$ z_i = x^1_i + x^2_i - \omega^1_i - \omega^2_i $$
    - Thus:
        $$ p_1z_1 + p_2z_2 = p_1(x^1_1 + x^2_1 - \omega^1_1 - \omega^2_1) + p_2(x^1_2 + x^2_2 - \omega^1_2 - \omega^2_2) $$
    - If this value of excess demand is zero, then supply must equal demand.
  - Demonstrating Equilibrium
    - By plotting demand for good 2 as a function of its price, and setting price of good 1 to = 1, we can find the equilibrium (which will be where the price function of good 2 intersects the $$x$$ axis).
  - Production
    - In a real economy, the endowment is not the only source of goods; production can produce new goods.
    - Firms can use inputs to create goods for exchange, and will produce the amount that maximises their profits:
        $$ \pi^j_i = \sum^n_{i=1}p_i*y^j_i (p) $$
        where $$y^j_i$$ is the output of good $$y_i$$ created by firm $$j$$
  - Profits
    - Profits are distributed to shareholders who can then expand their budget constraint and consume a great bundle of goods.
  - Aggregate Supply
    - The sum of all firm's outputs

    $$ Y_i (p) = \sum^m_{j=1} y^j_i (p) $$

  - Shareholding
    - The proportion of profits allocated to an individual consumer
    - $$𝜽^h_j$$ = percentage of firm $$j$$ owned by consumer $$h$$
  - Budget Constraint with Shareholding
    - When shareholding is added to the equation, the budget constraint expands

    $$ \sum^n_{i=1} ( p_ix^h_i ) = \sum^n_{i=1}( p_i\omega^h_i ) + \sum^m_{j=1}( 𝜽^h_j \pi_j ) $$

  - Level of Aggregate Demand
    - The sum of each individuals' demanded quantities

    $$ X_i = \sum^H_{h=1}( x^h_i * (p) ) $$

  - Excess Demand
    - The amount of aggregate demand that exceeds supply - see Walras' Law for level of excess demand

    $$ Z_i(p) = X_i(p) - Y_i(p) - \sum^H_{h=1}( \omega^h_i ) $$

    - Equilibrium occurs when Z_i(p) = 0
    - At this point, demand = supply + initial endowment
  - Efficiency
    - The best use of available resources.
    - Finding the efficient allocation when there are multiple firms is a complex puzzle.
  - Single Consumer Economy
    - A hypothetical example with two goods; labour and a consumption good.
    - The consumer provides labour to a firm and creates the output.
    - The profit ($$𝜽^h_j\pi$$) is returned to the consumer.
    - Profit is given by

    $$ \pi = p_1(x_1-\omega_1) + p_2(x_2-\omega_2) $$

    or written as

    $$ \pi = \tilde{x}_1p_1 + \tilde{x}_2p_2 $$

    - $$\tilde{x}_i$$ represents change from the endowment.
  - Efficient Equilibrium to Single Consumer Economy
    - The efficient equilibrium occurs when $$\tilde{x}^* =y^*$$
    - This will occur where the consumer's indifference curve and the firm's production plan meet at a tangent.
  - Marginal Rate of Substitution (MRS) and Marginal Rate of Transformation (MRT)
    - MRS is the rate at which can substitute one good for the other and maintain a constant utility.
    $$ MRS^1_2 = U_1 / U_2 $$
    - MRT is the rate at which good 1 can be sacrificed to create good 2.
    - $$MRT^1_2$$ is given.
    - The MRS defines the slope of the indifference curve in the single consumer economy model, while the MRT defines the slope of the firm's production plan.
    - The efficient equilibrium occurs when MRT and MRS meet.
  - Pareto Efficiency
    - The allocation of goods at which no consumer can receive a bundle that provides higher utility without lowering the utility of another consumer.
    - In an $$n > 1$$ economy PE allows us to allocate resources that are competitively desired.
    - $$\hat{x}$$ is PE if there is not an feasible alternative $$\bar{x}$$ that:
      - $$U(\hat{x}) \le U(\bar{x})$$ for all consumers AND
      - $$U(\hat{x}) \le U(\bar{x})$$ for at least one consumer
    - PE does not consider distribution or equity - merely that the allocation is Pareto efficient (and may be one of many distributions that is PE)
  - Theorems of Welfare Economics
    1. A competitive equilibrium is Pareto Efficient
    2. Any Pareto Efficient allocation can be decentralised as a competitive equilibrium.
  - Decentralisation
    - An initial endowment that can be transformed into a PE allocation by willing trade between consumers.
    - This endowment must be on the tangent of both consumers' Indifference Curves (ie. the Budget Constraint) in an Edgeworth Box.
    - If the endowment does not fall on the Budget Constraint, a redistribution of the initial endowment is required to achieve a decentralised PE allocation.
  - Lump Sum Taxes
    - A tax of a fixed amount on the initial endowment that cannot be increased or decreased by any action.
    - The most effective form of redistributive tax, but practically impossible to determine.
    - If the initial endowment is given by $$(\hat{p} * \omega{h}') - (\hat{p} * \omega{h})$$, the quantity of goods transferred is $$\tilde{x}_i$$
  - Tax and Subsidy
    - Assuming there are no costs to redistribution, the taxed amount = the subsidy amount

    $$T' = \hat{p} \tilde{x}'_i = S' = \hat{p} \tilde{x}'_i$$

  - Practicality
    - Lump sum taxes require near omnipotence to assess the level of redistribution required and as such are not practical.
    - Income taxes, though less ideal, are easier to assess and therefore are more effective.

# Week 3  - Cost Benefit Analysis
  - Cost Benefit Analysis (CBA)
    - The assessment of the expenses and returns of a policy or project that is used to decided which projects or politics to implement.
  - Controversies
    - Valuing benefit is subjective, and benefits and costs are not always evenly distributed.
    - Discounting future costs and benefits is again subjective.
    - Sometimes CBA requires valuing human life which is fraught.
  - Process
    1. Estimate the cost of the policy
    2. Calculate tangible benefits
    3. If intangible benefits may arise, estimate, value and calculate those.
    4. Estimate the time periods until the benefits exceed costs.
  - Net Present Value (NPV)
    - The discounted present value of future benefits.

      $$NPV = \sum^T_{t=0} (1+d)^{-t} * (B(t)-C(t)) $$

    - $$t =$$ period when benefit arises
    - $$d =$$ discount rate
    - $$B(t) =$$ Benefit at time $$t$$
    - $$C(t) =$$ Cost at time $$t$$
    - If NPV > 0, a project is of net benefit and could be undertaken.
  - Benefit Cost Ratio (BCR)
    - The ratio of the discounted benefits to the discounted costs

    $$BCR = \frac{\sum^T_{t=0} (1+d)^{-t} * (B(t)}{\sum^T_{t=0} (1+d)^{-t} * (C(t)} $$

    - If a project has a BCR > 1, the project is of net benefit.
  - Internal Rate of Return (IRR)
    - The rate at which the discounted costs equal the discounted benefits.
    - This is the rate of discounting that would give a NPV of 0.

    $$ NPV = \sum^T_{t=0} (1+d)^{-t} * (B(t) - C(t)) = 0 $$

      - Complex to solve - best estimate is fine!
    - This cannot be used to rank projects.
    - IRR has a bias towards shorter/smaller projects and doesn't account for the magnitude of benefits, especially those that occur later.
  - Present Value (PV)
    - The value of a future benefit in monetary terms. As prices illustrate the willingness to pay to obtain a certain utility, we can use prices, or the changes to prices, to value intangible benefits.
    - For instance, if a pill can add a year to your life for $1,000, and this is popular, we can make an assumption that a year of life is valued at least $1,000.
  - Marshallian Surplus
    - The net benefit of a project, given by the gross benefit minus the cost of consumption at market prices.
  - Hedonic Prices
    - A method for valuing intangible characteristics by comparing goods with similar tangible characteristics and measuring price differentials.
    - Useful for assessing Georgist Land Taxes etc.
  - Decision Criteria
    - A project decision will be based on a ranking of NPVs, BCRs, subject to the discount rate
    - The discount rate accounts for the cost of acquiring capital.
  - Valuing Life
    - Some projects require the valuation of human life. This is a difficult thing to tackle both technically and ethically.
    - Life is not priceless, otherwise as a society we would be prepared to pay anything to save a life.
    - Value of Statistical Life (VSL)
      - The expected value of preserving a life
      - VSL is the derivative of the willingness to pay with respect to the probability of dying (see below).
      $$\frac{\partial WTP}{\partial P} = \frac{\partial \rho}{\partial P}$$
    - Willingness to Pay (WTP)
      - The amount we are willing to pay to save a life.
    - Comparing Utility

      $$U(m-\rho, a) = (1-p)U(m,a) + p(U(m,d))$$
      - $$U(m,a)$$ is the utility of person m when alive
      - $$U(m,d)$$ is the utility of person m when deceased
      - $$U(m-\rho, a)$$ is the utility of person m when alive less the risk premium
      - $$P$$ is the probability of dying
      - $$\rho$$ (rho) is the risk premium
    - Value of a Life Year (VOLY) (VOALY)
      - VOLY is the benefit gained from a year of life.
      - $$VSL =  \sum^T_{t=0} (1+d)^{-t} * VOLY$$
    - Quality of a Life Year (QOLY) (QOALY)
      - The quality of a year of life.
      - QOLY $$\in [0,1]$$
      - Denotes how good an extra year of life would be
      - eg. Extending a terminally ill patients' life may provide them with a very low QOLY if they would be suffering during this time.
  - Time Value of Money
    - A dollar today is worth more than a dollar later due to opportunity cost, time preference, a trend of income growth and uncertainty.
  - Discount Rates
    - Measure the relative value of a dollar at time t vs today
    - Private vs Social Discount Rates
      - Individuals have their own unique discount rates depending on their preferences.
      - Social discount rates can be thought of as the aggregate of private discount rates.
    - Discount rates may not be constant over time - we may value the next 5 years at a higher level, then the subsequent 5 years less etc.
  - Unamity vs Conflict of Interest
    - When there is a pareto gain, the project is unanimously positive - some people gain but no one loses.
      - $$U^h(x^h+\Delta^h) \ge U^h(x^h)$$ for all consumers h
    - When some gain and some lose, there is a conflict of interest between those two groups.
      - $$U^h(x^h+\Delta^h) \ge U^h(x^h)$$ for some
      - $$U^h(x^h+\Delta^h) \le U^h(x^h)$$ for others
  - Compensation Tests
    - Trading off between these winners and loses in a conflict of interest requires compensation tests.
    - Essentially, how can we compensate the losers adequately so that they won't complain.
    - Kaldor's Compensation Test
      - Can the winners compensate the losers and still achieve a net benefit?
      $$ | U{h,w}(x^h+\Delta^h | > | U{h,l}(x^h+\Delta^h | $$
        - ie. is the size of the winners' gain greater than the size of the losers' loss?
    - Hick's Compensation Test
      - Is is cost effective for the losers to pay the winners to forgo the project
      $$ | U{h,l}(x^h+\Delta^h | > | U{h,w}(x^h+\Delta^h | $$
        - ie. is the size of the losers' potential loss greater than the size of the winners' potential gain?
  - Scitovsky Reversal Paradox
    - A proposed project would change the possible utility frontier, where consumer 1 loses utility and consumer 2 gains.
    - However, there is another point on this new frontier that would allow both to gain utility, even after 2 compensates 1.
    - Interestingly, the reverse is true too - if you start at the 'new' frontier and change to the old one, there is also a situation that provides a net benefit to both consumers.
  - Compensating Variation (CV)
    - The amount of compensation required to pass Kaldor's Compensation Test
  - Equivalent Variation (EV)
    - The amount of compensation required to pass Hick's Compensation Test
  - Social Welfare Exchange
    $$\partial W = \sum^h \beta^hCV^h = \sum^h \beta^hWTP^h$$
    - $$\beta^h$$ is the social marginal value of income for individual h
      $$\beta^h = \frac{\partial W }{ \partial U^h} * \frac{\partial U^h }{ \partial M^h}$$
        - ie. A project with a greater utility with regard to income will be preferred.
    - Assuming there are no market failures, all people will have the same marginal value of income
      - ie. $$\beta^h = \beta$$
    - There should be perfect correspondence between NPV and the change in social welfare such that
      $$\partial W = \beta *NPV$$
  - Shadow Prices
    - Are used to calculate NPV when market failures prevent this.
    - A set of shadow prices always show a project with $$NPV > 0$$ will have a positive change to social welfare.

# Week 4  - Voting
  - Definition
    - A collective choice sample
    - A method of accessing the preferences of a group
    - Generally, this will offer stability and is arguably one of the fairest methods of deciding allocations.
  - Social Choice Theory
    - Analyses the aggregation of individual preferences into a social preference
  - Arrows Impossibility Theorem
    - There is no process of aggregating preferences which works in every case; someone always misses out.
    - Arrow compiled 5 rules or conditions that a good voting/choice process should satisfy.
    - 5 Rules
        1. Independence of Irrelevant Alternatives; Rankings should not change if a new choice is introduced
        2. Nondictatorship; Collective preferences should not be dictated by personal preferences.
        3. Pareto Criterium; If everyone agrees on a ranking of options, the collective choice should reflect that
        4. Unrestricted Domain; the process should accommodate any arrangement of individual rankings.
        5. Transitivy; if the social preference is $$A \succ B, B \succ C$$, then $$A \succ C$$ by necessity.
    - Applies when number of options to vote for $$n > 2$$
    - No method satisfies all 5 conditions, though majority voting satisfies these when $$n = 2$$
  - May's Theorem
    - When $$n = 2$$, only majority rule can satisfy the following conditions:
      1. Anonymity
      2. Neutrality; All options must be treated equally.
      3. Decisiveness; The deciding rule must select a winner, there cannot be a tie.
      4. Positive Responsiveness; A increase to the number of votes for the winner should not change the result.
  - Voting Games
    - Majority Rules
      - Two options are provided for a group to vote for, the majority wins.
      - More options can be arranged in voting pairs of 2 in a round-robin type situation to find a winner.
    - Condorcet Winner
        - The winner of the $$n > 2$$ majority voting game.
        - Median Voter Theorems
          1. Hotelling's Principle of Minimal Differentiation
            - If there are an odd number of voters, and the policy space is one dimensional (ie. voting options can be arranged in a line) then the median voter will always select the Condorcet winner.
          2. If there are an odd number of voters and a 1D policy space, and single crossing preferences, the preferred option of the median voter will be the Condorcet winner.
        - Single Crossing Preferences
          - Single Crossing Preferences mean that if the voting preferences of individuals were graphed with ranking on the y axis and each option on the x axis, a line joining each voters' preferences would only cross another voters' line once.
        - Agenda Manipulation
          - If there is no clear Condorcet winner, a voting agenda (the order in which pairs matched and voted on) can be arranged to influence the outcome.
          - The agenda setter then has the ability to determine the outcome they prefer, though it could be overcome by strategic voting.
          - This can be overcome by ensuring that every possible binary pair is voted on (rather than knocking out a loser if it loses one vote)
    - Borda Voting
        - Rules
          - If there are n options, each voter assigns their first option n votes, their next preference n-1 votes etc. until they are exhausted. The option with the highest score wins.
        - Arrow's Violation
          - This violates the Independence of Irrelevant Alternatives; a new choice could bump an option down and reduce the number of votes it receives enough to change a ranking.
    - Plurality Voting
      - All options are provided at once, and each voter's first preference receives one vote. All their other preferences receive zero votes.
    - Approval Voting
      - All options are provided at once, and each voter can assign one vote to as many options as they are satisfied with.
    - Runoff Voting
      - All options are provided at once. If a majority winner does not arise, the two (or more) best options are kept and are voted on again.
      - This fails the positive responsiveness test (both numbers of votes can increase but if the 2nd ranked option receives more votes in the second round, the rank changes)
  - Paradox of Voting
    - Voting has a specified cost (time and effort) but an uncertain benefit. Given this, why do people opt to vote?
      - Some places use compulsory voting to address this issue.
    - Cost Benefit of Voting
      - The decision to vote is based on the expected payoff to voting.
        - $$E_i$$ is the benefit of party $$i$$ winning. Let $$E_1 > E_2$$
        - $$B = E_1 - E_2 > 0$$ is the value of party 1 winning.
        - $$P =$$ Probability of an individual being the tiebreaking vote.
        - $$P*B =$$ The expected benefit of voting.
        - $$c =$$ Cost of Voting
        - A citizen will only vote if $$P*B > c$$
        - Given that $$P$$ is often extremely small, $$P*B$$ is also quite small and seems to rarely exceed $$c$$, yet people still vote.
        - Perhaps there is an intangible benefit to voting (joy of participating in democracy, a sausage etc.) that is unaccounted for.
  - Political Competition
    - Political platforms are a set of policies aimed at balance electoral benefit with ideological views.
      - The more candidates deviate from their views, the lower the utility (for the candidate) of them winning.
      - If the benefit of a candidate winning is greater than the cost of deviating, they will deviate quite a long way (and likely provide the median voter with what they want).

# Week 5  - Optimality & Comparability
  - Implications of the 2nd Theorem of Welfare Economics
    - Any Pareto Efficient allocation can be decentralised as a competitive equilibrium.
  - Social Optimality
    - Pareto Efficiency Benefit
      - If we can improve an outcome for $$p_1$$ without making it worse for anyone else, then we haven't optimised our resources.
      - By designing a competitive economy we can create this without significant or ongoing intervention beyond initial lump sum transfers.
    - Selection of Pareto Efficient Allocation
      - How many PEAs are available?
      - How do we choose which one we want?
        - Voting?
        - Random/Unamity?
        - Central Planning?
      - A social planner would aggregate individual consumers' welfare functions to do this, using a Bergson-Samuelson social welfare function.
      - There are three types of SWF:
        1. Utilitarian; the greatest aggregate social welfare is optimal, regardless of distribution
        2. Intermediate; the greatest aggregate social welfare is desirable but should make consideration for Equity
        3. Rawlsian; the aggregate social welfare doesn't matter, only equity (or the welfare of the worst off person) matters
      - A social planner would then find the highest social welfare indifference curve that is tangent to the utility possibility frontier (the line of possible allocations)
      - We can use Edgeworth boxes to find an initial endowment that is a decentralisation of this outcome.
      - This outcome is efficient and equitable and only requires initial redistribution of endowments.
  - Lump Sum Taxes
    - Optimality of Taxes
      - Costless in theory; no distortion to choices (as they can't be avoided/reduced by any action) and require no resources to implement.
      - Taxes are optimal when they result in a socially optimal equilibrium.
        - This requires predicting equilibriums at all income levels, preferences and values of endowments.
          - This is a difficult task.
      - Optimal taxes require honest reporting of endowments, or inference from actions that consumers take.
        - If we use inference, then actions can theoretically change the lump sum tax amount, which invalidates the benefit of LST
        - Honest reporting will only occur when there are incentives to do so
    - Incentive Compatibility
      - Incentives are correctly correlated to characteristics that do not offer perverse incentives.
    - Impossibility
      - If any person has an incentive to not honestly report their endowment, then LSTs are inherently handicapped.
      - Hammond : in a large economy LSTs are always incentive incompatible.
      - So there are no practical implementations of LSTs
  - Pareto Efficiency
    - Allows comparisons of economic states without requiring interpersonal comparisons of utility.
    - Strengths and Weaknesses
      - Doesn't require assessment of unique costs or benefits
      - Ignores allocations that may increase welfare overall by making someone worse off
      - Extreme allocations (one person has everything) can be PE but obviously not desirable.
      - PE cannot rank non-PE allocations
  - Social Welfare Functions (SWFs)
    - Avoid the drawbacks of PE
    - Interpretations
        1. A social welfare function captures the views of a dictator, and their interpretation of utility distribution.
        2. A social welfare function captures the ethical objectives of society.
        3. A social welfare function represents an aggregate of individual preferences
          - This requires a set of rules of aggregation such as voting.
    - Limits
      - As there is no perfect voting system or any system of determining rules, determining a good SWF is difficult.
      - We can only use preferences to rank options, not assess true opinions or strength of feelings.
  - Interpersonal Comparability
    - There are two forms of utility; ordinal and cardinal
    - Ordinal vs Cardinal Utility
        - Ordinal Utility
          - Merely a ranking, which can be transformed in any way
          - $$U \rightarrow a + bU$$ etc.
        - Cardinal Utility
          - More measurable, but can only be transformed by constant amounts
          - $$U \rightarrow a + bU$$ where $$a,b$$ are constants.
        - Both Ordinal and Cardinal utilties can be incomparable if a different transformation is applied to $$U_1$$ and $$U_2$$
    - Comparability Conditions
      - Ordinal Utility

      $$ U_1 > U_2 \rightarrow fU_1 > fU_2 $$

        - This is only preserved when the transformation $$f$$ is the same for all consumers' ordinal utilities.
      - Cardinal utility

      $$\hat{U} = a_i + bU$$

        - Requires that $$b$$ is constant for all consumers, but $$a_i$$ can differ.
        - Cardinal Unit Comparability
          - The units are comparable but the levels are not.
        - Cardinal Full Comparability
          - Both units and levels are comparable, $$a_i = a$$ for all parties.

# Week 6  - Midterm - No Content

# Week 7  - Inequality & Poverty
  - Efficiency vs Equity
    - Social welfare allows us to address equity.
    - Finding a balance between efficiency and equity is a common frame.
    - Inequality and poverty provide an alternative perspective on distribution from efficiency.
  - Measuring Income
    - A requirement for measuring inequality/poverty.
    - Income is a change between $$t=0$$ and $$t=1$$ (usually one year)
    - We look at choices that can effect future income - if there is uncertainty about the future, forward and backward income assessments will likely differ.
    - Definitions
      - Simons Definition of Income
        - The sum of the value of consumption and the change in value of the store of wealth
        - ie. consumption + savings
      - Hicks Definition of Income
        - The maximum value which a person can consume during a period without reducing their wealth.
      - It is important to recognise that income is not specifically defined.
  - Equivalence Scales
    - Definitions
      - Income levels are not the same for all households, given different demographic makeups.
      - To compare households we need an equivalence scale to account for demography.
    - Minimum Needs Scales
      - A basic bundle of goods required for households by size.
    - Engel Scales
      - Households that spend equivalent proportions of income on food can be compared between demographics.
    - Adult Good Scales
      - The effect of children can be accommodated by looking at goods only consumed by adults (alcohol etc.)
    - Limitations
      - Minimum needs are defined only for low incomes, and don't account for social pressures.
      - Engel Scales have a narrow focus - food choices may differ.
      - Demand for adult goods may differ between demographics (cultural forces etc.)
  - Inequality Measurement
    - A single measure that quantifies inequality in a distribution.
    - Issues
      - Easy to observe, difficult to quantify
      - We may also want to compare inequality between time periods, geographic locations etc.
    - Methods
      - There are H households labelled $$h = 1, 2, 3, ... , H$$
      - Incomes are ordered such that $$M_1 \le M_2 \le M_3 \le ... \le M_h$$
      - Mean Income:
        $$M = (1/H) * \sum^H_{h=1}M_H $$
      - An inequality measure gives us a value $$\in [0,1]$$ to the distribution $$M_1, M_2, M_3, ... , M_H$$
        - 0 is complete equality
        - 1 is complete inequality (one person gets 100% of all income)
      - Range
        - Range is the gap between the highest and lowest Incomes

        $$ R = (M_H - M_1) / H_M $$

        - Doesn't tell us anything about the distribution of incomes between the highest and lowest - just the gap.
      - Relative Mean Deviation
        - The measure of the difference from the mean income.

        $$ D = \sum_H |M - M_h| / (2(H-1)M) $$

        - This does not change even if transfer occur between households on the same side as the mean.
    - Pigou-Dalton Principle
      - An inequality measure must decrease if there is a transfer of income from a richer household to a poorer one if the rankings stay the same and total income is constant.
        - Neither C nor D meet this principle.
    - Coefficient of Variation

      $$C = \sigma / \mu\sqrt{(H-1)}$$

      $$\sigma = \sum_h (M{h}-\mu)^2 / H $$

      - The effect of a transfer does not depend on the income levels of the households, just the difference between them.
        - This means that C can decrease by reducing the difference between poor and poorest for instance.
      - An argument can be made that transfers should have a larger effect at lower incomes - so the Pigou Dalton condition may not be the only condition required.
    - Lorenz Curve
      - A graphical representation of Income Distribution, with population ranked in order of income
        - The proportion of population is graphed against the proportion of income.
        - A 45 degree line extends from the origin, representing perfect equality.
        - The further the Lorenz curve below the 45 deg line, the greater the inequality in the distribution.
        - If two Lorenz curves cross, they cannot be ranked/compared.
        - Lorenz Curves provide a partial ordering only.
    - GINI Coefficient
      - Selects the lowest pair of each possible pair of incomes, then averages it.

    $$G = 1 - ( 1 / (H^2\mu)) \sum_i\sum_j \min\{m_i,m_j\}$$

    - Atkinson's Theorem
      - Consider two distributions with the same mean.
        - If the Lorenz Curves for these distributions do not cross, every symmetric and concave social welfare function will assign a higher level of welfare to the distribution whose Lorenz curve is closest to the 45deg line.
      - ie. Symmetry and Concavity of a Social Welfare Function implies that transfers from rich to poor improve social welfare.
      - The converse of this is that if two LC's cross, there are two different SWFs that rank them differently.
        - Hence LCs provide the most complete ranking without defining the social welfare function.
    - GINI Indifference Curves (GINI IC)
      - Redistribution of incomes leaves GINI unchanged if $$[(2H-1)M_1 + M_2 + M_3 + ... + M_H]$$ is constant
      - For $$n = 2$$, this reduces to $$= 3M_1 + M_2$$
      - This provides a kinked indifference curve, with the 45deg line from the origin passing through each kink.
    - All statistical measures of inequality embody implicit assumptions about welfare, but these may not be ideal.
      - Alternatively, we can begin with a SWF and construct the implied inequality measure, making them explicit.
    - Social Welfare Functions (SWFs)
        - Utilitarian SWF
        $$W = \sum{h} U(M^h)$$
          - $$U'(M) > 0$$ and $$U''(M) < 0$$
            - ie. Utility increases at a decreasing rate.
          - Equally distributed income $$M_{EDE}$$:
            $$\sum{h} U(M^h) = H * U(M_{EDE})$$
          - The Atkinson Measure of inequality is given by:
            $$ A = (1 - M_{EDE}) / \mu $$
          - This is dependent on the utility function used.
          - The Application of the Atkinson measure typically assumes
            - $$U(M) = M^(1-\epsilon) / (1 - \epsilon)$$ for any $$\epsilon =/= 1$$
            - $$U(M) = log(M)$$ for $$\epsilon = 1$$
            - As $$\epsilon \rightarrow 1$$, the greater the social concern for equity and the social welfare function becomes more concave.
  - Poverty
    - Definitions
      - Relative vs Absolute
        - Absolute: Fixed minimum level of consumption, below which is 'poverty'
        - Relative: Level of consumption in context of wider society
      - Poverty Line: Delineation of poverty Definition
        - Can be defined relatively or absolutely.
    - Measures
      - Let the poverty line $$= z$$
      - Income Gap for Household h: $$g_h = z - M_h$$
      - Number of households in poverty is $$q$$
      - Headcount Ratio: $$E = q / H$$
        - Proportion of total households below poverty line
        - Quick and easy measure, not particularly useful.
      - Aggregate Poverty Gap: $$V = \sum^q_{h=1} g_h$$
        - Sum of income gaps of households in poverty.
        - Gives the total income required to 'end' poverty, though not how it is distributed.
        - Not sensitive to number of people in poverty - a small number of people in extreme poverty could give a similar APG to many people slightly below the poverty line.
      - Income Gap Ratio: $$I = (1/z) * \sum^q_{h=1} g_h/q , I \in [0,1]$$
    - Poverty Measure Criteria
      - Should not be affected by transfers between households above the poverty line.
      - Should increase if the people below PL become worse off
      - Should be anonymous
      - Should rise after a regressive transfer.
      - More weight should be given to the poorest
      - It should reduce to the headcount ratio if all incomes below the poverty line are equal
    - Sen Measure: $$ S = E * [I + (1 - I)G_p(q/(q+1))] $$
       - $$G_p =$$ GINI Coefficient of houses below PL
       - $$q =$$ Number of people below PL
       - $$I =$$ income shortfall
       - $$E =$$ Headcount ratio
    - Subgroup Consistency
      - Measures if an increase in poverty to a subgroup causes an aggregate increase in poverty.
      - Let population have 𝜞 subgroups

      $$P_\alpha = (1/H) * \sum^𝜞_{\lambda=1} \sum^{q^\lambda}_{h=1} ( g^\lambda_h / z)^\alpha$$

      - $$\alpha =$$ sensitivity to transfers.
      $$\alpha = 0 \rightarrow P_\alpha = E$$
      $$\alpha = 1 \rightarrow P_\alpha = E*I$$
      $$\alpha > 1 \rightarrow P_\alpha$$ is sensitive to transfers

# Week 8  - Midterm Review - No Content

# Week 9  - Public Goods
  - Definitions
    - Rivalrous: A good that the use of precludes the use by another.
        - Land
    - Excludable: A good that the use of can be controlled or limited.
        - Entry to a gym
    - Combinations:

    |               |         Rivalrous         |  Non Rivalrous |
    |---------------|----------------------------|-----------|
    |  Excludable  |     Private Goods          |   Club Goods |
    |  Non Excludable | Common Property Resources  |  Public Goods |

    - Private Goods
        - Normal consumer products
    - Club Goods
        - Goods like gyms, clubs, etc. (Sometimes club goods do have rivalrous parts bout them - a specific machine at a gym etc.)
    - Common Property Resources
        - Goods like public grazing land, fish stocks, etc.
    - Public Goods
        - Services such as radio broadcasts, national defence etc.
  - Edge Cases
    - CGs and CPRs are 'impure public goods'
  - Free Rider Problem
    - The characteristics of a Public Good are such that those who don't contribute to hem get more net utility than those who do, as both can get equal use of them.
    - This leads to an undersupply of the public good and an aggregate utility loss.
  - Private Provision
    - Setup:
      - Consider a market with a private and a public good. The decision of how much to consume of each is a strategic interaction, and uses Game Theory to resolve.
      - Pareto improvements can be made by ensuring all consumers contribute more to the public good quantity than what they demand.
      - This requires us to use the sums of the Marginal Rates of Substitution.
    - Samuelson Rule
      - The $$\sum MRS = MRT$$; The Marginal Rate of Transformation between the private and public good.
      - MRS measures the marginal benefit to a consumer of consuming another private good.
      - MRT measures the marginal cost of consuming another unit.
  - Voting
    - Issues
        - Public Good Provision is determined by voting in most developed states.
        - Parties propose provisions of goods and voters choose their favoured bundle.
        - Does voting attain efficiency?
    - Model
        - Population: $$H$$ voters
        - Cost of public good is shared equally between all H
        - Consumer $$h$$ has income $$M(h)$$
        - Utility is given: $$U[x(h), G] = U[M(h)-(G/H), G]$$
        - Consumers vote for their utility maximising level of $$G$$
        - Each voter has their own Indifference Curve for the public good $$G$$, determined y the income level.
        - If $$H$$ is odd, the median voter m will determine the level of $$G$$ supplied.

            $$ \max\{G\} (U(M(m)-(G/H)), G)$$

            - The necessary condition can be written: $$MRS(m) = 1/H$$
            - Therefore voting efficiency is achieved if $$MRS_m = \sum^H_{h=1} MRS_h/H$$
        - However, this doesn't really work out in practice.
        - Income distributions tend to have a long right hand tail, as the median income s below the mean.
        - Thus the median MRS will exceed the efficient level if incomes are not normally distributed.
  - Personalised Prices
    - Case for
        - Personalised prices help us achieve an efficient distribution of public goods.
        - While private goods have varying quantities and constant prices, public goods an have the same quantity (equal distribution) but varying prices to ensure hat quantity is received by people will all endowments.
    - Lindhol Mechanism
        - A method of implemented personalised prices.
        - Asks users to declare their demand of a public good as a function of the share.
        - Shares are adjusted until all consumers demand the same quantity.
        - If users are honest, this will provide an efficient equilibrium.
    - Limitations
        - The practicality of gathering the required data
        - The mechanism is not incentive compatible. The incentive is to lie and get a better deal.
  - Mechanism Design
    - How can we find an allocation mechanism that doesn't encourage free riding?
        - Do we encourage understatement of demand? This might result in under provision which is also a welfare loss from the optimal allocation.
        - Do we use a fixed income provision for public goods?

# Week 10 - Income Tax
  - Equity and Efficiency
    - Taxation is a key source of government revenue. Income taxes are a major portion of tax revenue.
    - Income taxes are easy to observe (relative to other options) and are thus useful for redistribution.
    - However, income taxes discentivise labour, reducing labour supply and creating inefficiencies.
    - Ideally, an income tax would strike a balance between equity and efficiency
  - Labour Supply
    - About:
        - Can be investigated using a standard consumer choice model, with income and substitution effects.
        - Income taxes effect the budget constraint of a worker and their willingness to supply labour.
    - Preferences
        - Utility:

          $$U = U(x, L - l) = U(x, l)$$

          - $$x =$$ Income
          - $$L =$$ Total Time ('Budget')
          - $$l =$$ Labour Time
          - $$L - l =$$ Leisure Time
        - Labour is a negative good (ie. utility decrease with respect to quantity supplied)
        - An hour of labour earns a wage $$w$$
        - For tax rate t, the budget constraint is $$px = (1-t)wl$$
        - Preferences can also be written in terms of income.
        - Let $$z = wl$$ (Income before taxes are taken out)
        - $$U = U(x, z/w)$$ (given $$z/w = l$$)
        - Budget Constraint $$BC = px (1-t)z$$
    - Substitution Effect
        - As wages rise, possible consumption rises. Workers will substitute leisure for more labour, allowing them to consume more (at the expense of leisure).
        - This causes a move along the Indifference Curve
        - This effect works in reverse for a tax increase, which is effectively a wage decrease. Workers will work less and opt for more leisure.
    - Income Effect
        - As wages rise, income rises. The amount of labour required to achieve their original consumption level has decreased.
        - This effect may either reduce the level of labour supplied (earn the same income (therefore utility) for less labour) or increase the level (earn more per hour worked, the incentive to supply more labour is greater).
        - This causes a shift of the Budget Constraint away from the origin (to a new Indifference Curve)
        - This effect works in reverse for a tax increase, which is effectively a wage decrease. The amount of labour required to achieve their original consumption level has increased (increasing labour supply), but the tradeoff between leisure and consumption is now different, and the worker may opt to relax instead of consume.
    - Tax Brackets
        - Tax brackets create kinks in the leisure/consumption tradeoff. The point at which the tax bracket changes is an apex and contains the 'corner solution'.
        - Points not at the kink are 'interior solutions'.
        - A consumer at a corner solution may be unaffected by taxation level changes, as long as the tax bracket remains steady.
    - Hours Worked
        - Not all jobs offer totally flexible hours.
        - A job that has a minimum hour requirement will create a Budget Constraint for which the level of consumption for <20 hours worked is always 0.
        - Wage changes can push people in or out of work given hour requirements. If a job requires 20 hours but a consumer would only work 18 at the wage level, they will choose to not work that job.
    - Key Points
        - Tax changes create income and substitution effects
        - Marginal tax brackets create corner cases, where tax level changes don't affect worker decisions.
        - Taxes can affect the decision to enter or leave the workforce
        - These changes are often hard to measure or attribute correctly, given the nature of labour. Unemployment benefits, unions, power imbalances, alternative income (or lack thereof) can also affect the labour supply decision.
        - Generally participation rates are insensitive to taxes, but elasticity of labour supply differs between demographic groups.
            - Single parents are more sensitive to wage changes as their opportunity cost is time spent with their child/paying for childcare.
  - Optimal Income Taxes
    - Achieves a balance of labour market efficiency and social equity, given the assumption that incomes are not equally distributed.
    - Mirlees Model of Income Taxation
        - All workers have identical preferences, but different skill levels (which determines wage levels)
        - Skill cannot be observed by governments in a cost effective way - thus wages are an indicator for skill level.
        - The government is subject to two conditions:
            1. Governments must fund expenditures using tax revenues
            2. Governments must choose a taxation structure that is incentive compatible; that is, the should incentivise the ideal level of labour supply as much as possible.
        - Model
            - A consumer of skill level s will supply l hours of labour, and will earn an income $$z(s) = sl$$
            - Tax paid is given by $$T(z)$$
            - Consumption is given by $$x(s) = C[z(s)] = z(s) - T(z)$$
                - When $$T(z) = 0$$, the Budget Constraint is at a 45deg angle. For any greater $$T(z)$$, the level of consumption will be less than the level of consumption and will have a gradient $$= 1 - T(z)$$, which will be less than 45deg (but will still intersect the original line at the horizontal)
            -  Preferences are assumed to satisfy the Agent Monotocity condition; the indifference curve will be steeper for a lower skill consumer at any point on this graph.
            - Marginal Tax Rates should be always be positive - but not peaked (decreasing as income increases at any point) or greater than 100% (which totally disincentives labour supply).
            - The marginal tax rate on the highest skill consumer should in theory be 0% - this allows the maximum utility for that consumer but does not reduce the tax revenue received by the government. This applies only to the highest skill worker.
  - Numerical Analysis
    - To analyse the optimal level of income tax, a social welfare function should be applied.
  - Specialisation
    - About:
        - There are two specialisations of the general model that provide additional insight
    - Quasi-Linear Models
        - QL Models restrict the form of the individual utility function, which becomes:
        $$ U = u(x) - z/s $$
    - Rawlsian Taxation
        - Rawlsian taxation adopts a specific social welfare function, evaluated by the minimum utility:
        $$ W = \min{U} $$
        - This aims to maximise the utility of the worst of consumer.
        - If tax revenue is redistributed as a lump sum grant, then the optimal RT maximises this grant.

# Week 11 - Tax Evasion
  - Definition
      - The illegal failure to pay tax - NOT the avoidance or minimisation of tax via legal processes.
          - This line is essentially subjective
      - An important consideration for tax policy - how can taxes be structured to minimise evasion (and also avoidance).
  - Hidden Economy
      - Definition
          - Comprises economic activity which is not measured by traditional means.
          - Can include payment for illegal goods and services, 'under the table' or 'cash in hand' payments, or simply activities that produce something that aren't traditionally recorded, such as growing your own food.
      - Observation
          - There are roundabout ways of measuring hidden economic activity.
          - Comparing national income to national expenditure.
          - Measuring demand for cash
          - Measuring necessary inputs into hidden economic activity (electricity etc.)
          - These are broadly quite accurate but not very granular.
  - The Evasion Decision
      - Essentially a risk v reward decision.
      - Model:
          - $$Y =$$ Income
          - $$X =$$ Declared income, $$X \le Y$$
          - $$t =$$ Tax Rate
          - $$F =$$ Fine Rate - usually levied as a proportion of the evaded tax, given $$Ft(Y-X)$$
          - Successful Evasion   $$= Y - tX$$
          - Unsuccessful Evasion $$= (1-t)Y - Ft(Y-X)$$
          - Probability of being caught $$= P$$
          - Utility Function:

          $$E(U(X)) = [1-p] * [U(Successful Evasion)] + p * [U(Unsuccessful Evasion)]$$

          - To find the utility maximising income declaration, maximise $$E(U(X))$$. This income will be: $$0 \le X \le Y$$
          - If $$p < 1/(1+F)$$, evasion will occur
              - Notice this is independent of income level (hence the proportional fine vs a flat fine)
  - Auditing & Punishment
      - The resources dedicated to catching tax avoidance is a policy decision set by governments. Therefore, probability $$p$$ is set by the government.
      - Governments also control the fine rate.
      - Government revenue also depends upon these rates:
        $$R = tX + p(1+F)t(Y-X)$$
      - If $$pF < 1 - p$$, increasing either $$p$$ or $$F$$ will increase revenue.
      - Increasing the probability of catching tax evasion is costly - it requires more bureaucracy and oversight. Increasing the fine is almost costless and so is a more efficient choice.
      - Large, infrequent fines are not particularly conducive to increasing welfare however, so some level of observation is required to not create a net decrease
      - Punishments may also be set by a separate branch of the government to the oversight - requiring coordination between branches (and potentially levels).
      - The economics of crime views tax evasion as any other crime. The punishment should be tailored to the harm caused by the crime - suggesting again that a large fine, infrequently issued is not a productive response to evasion.
  - Effect of Honesty
      - There is an assumed psychological cost to being dishonest:
        $$U = U(Y) - xE$$  
        - where $$E$$ is the psychological cost
      - Thus the gains of tax evasion must be greater than this psychological cost.
      - What is the Nash Equilibrium of this scenario?
          - Mixed Strategy
              - Pr(Audit by Government) $$= e* = C/(T+F)$$
              - Pr(Evasion by Taxpayer) $$= p* = T/(T+F)$$
              - $$C =$$ Cost of Audit
              - $$T =$$ Taxed Amount
              - $$F =$$ Fine Amount
          - Utility Functions

          $$U(Taxpayer)   = Y - T$$

          $$U(Government) = T - [C/(T+F)]*T$$

          - Deadweight Loss of an Audit $$= [C/(T+F)]*T$$

# Week 12 - Fiscal Federalism
  - Definition
      - Generally, there are multiple levels of governance in every state. Fiscal Federalism addresses the decision to divide the revenue collection and expenditure between these levels.
      - The top level of government (federal) usually decides how these roles are allocated, but super-national organisations such as the EU represent looming complexities to this issue
  - Allocation of Responsibility
      - Technically, allocation is largely arbitrary as long as the correct allocation of taxes/spending is allocated. In reality, some levels of government are better suited to make these decisions.
      - There are also political limitations - it may be easier to get support for a new tax or spending initiative at a lower level where there are fewer people to convince.
      - Tiebout Hypothesis: Individuals will self-organise themselves into communities with roughly aligned preferences. In reality there are limits to the ability to do this (access to work, social connections, affordability etc.).
      - Government design is a tradeoff between benefits and costs - more levels requires more bureaucracy per capita, fewer levels means greater areas to administer. Finding the correct balance is not always straightforward. If a level of government improves efficiency or equity, then it enhances the overall government.
  - Uniform Provision
      - UP is efficient if preferences are homogenous. Across large states, this becomes less likely to be true (both due to the sheer number, and to geographic/cultural differences)
      - In regions with heterogenous preferences, a balance must be struck between the various preferences.
      - UP implies a welfare loss compared to differentiated provision (in the same way tiered pricing is more effective at maximising profit than single pricing)
      - However, there are costs to DP - so DP is only more efficient if UP > DP + Cost of Differentiation
  - Differentiation
      - Can be used to allocate resources based on geographic preferences. If each region is an independent provider of public goods, it is more likely for that region to provide a level of each good that reduces welfare loss compared to a single uniform provision.
      - In the long run, if a consumer is unhappy with the allocation of public goods, they can in theory relocate to a community with an allocation to matches their preferences better.
      - Regions also have different resource endowments and therefore different regional incomes, requiring some reallocation of endowments between regions.
      - However, reallocation of endowments should not occur due to preferences of outcomes - just to balance regional inequalities of endowments.
  - Centralisation
      - Definitions
          - Each public good has a level at which it is most effectively organised and distributed.
          - If there were no costs of governments, then we would have as many levels of government as required to get the most effective provision of public goods. However, there are costs of governments, and therefore a compromise must be made.
          - Public goods can be centralised or decentralised
      - Model
          - A centralised good has $$n = 1$$ provision.

            $$U(centralised) = 1 - \alpha |(1/2) - i| - C$$

            - $$\alpha =$$ - cost of centralisation
            - $$i =$$ 'location' - ie. the distance from the provision of individual i
            - $$C =$$ cost of good provision
          - A decentralised good has n > 1 provisions, usually by subsidiary governments to the top level government.
            - $$U(decentralised)$$, 1 of 2 provisions $$= 1 - \alpha \|(1/4) - i\| - 2C   where i \in [0, 1/2]$$
            - $$U(decentralised)$$, 2 of 2 provisions $$= 1 - \alpha \|(3/4) - i\| - 2C   where i \in [1/2, 1]$$
          - If $$C \le$$ the cost of centralisation (ie. the welfare loss) then decentralisation is optimal.
            - For centralised provision: the average value of $$\|(1/2) - i\|$$ will be $$1/4$$
            - For decentralised provision: the average value of $$\|(1/4) - i\|$$ will be $$1/8$$
            - Therefore if $$C \le \alpha[(1/4) - (1/8)]$$, decentralisation is optimal
      - Issues
          - Median Voter Theory suggests that the median voter will vote for decentralisation when $$C \le \alpha(1/4)$$, which will lead to excessive decentralisation.
      - Arguments for decentralisation are:
          1. Local Information
          2. Less Political Pressure
          3. Matching of Provision to Preferences
      - Arguments for centralisation are:
          1. Insurance against regional shocks
          2. Opportunity for redistribution between regions
  - Accountability
      - Centralisation may make it harder to hold decision makers accountable.
      - Decentralisation means politicians have less power and there are often duplications of provision, allowing for comparison between regions within a state.
      - However voters can't always observe politicians in either system, so decentralisation is not a catchall fix.
      - Also, voters may observe poor provision and blame a politician, when there may be other exogenous factors impacting provision (say, a natural disaster etc.)
  - Risk Decentralisation
      - Decentralised provision can hedge against adverse shocks by spreading provision out (same way portfolio diversity spreads risk).
      - However if a region is inherently subject to more adverse shocks, then they will require constant subsidisation. This is not insurance but redistribution.
      - Risk decentralisation is only applicable when risks are approximately even between regions.
  - Budget Constraints
      - Budget constraints of lower governments are usually set (or at least the responsibility of) the tier above.
      - Thus there is something of a moral hazard - a lower tier government without a 'hard' or strict budget constraint are incentivised to overspend (and provide more public goods, satisfying their constituents) knowing that they would be bailed out by the higher tier of government.
      - Thus, strict budget constraints are important for governments below the top tier.
