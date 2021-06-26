---
title: Development Economics Notes
subtitle: ECON 3501
date: 26/06/2021
author: Scott Belcher
layout: file
---
# Week 1 - Introduction
  - What is economic development?
    - The growth in real incomes of people.
    - Development can be estimated using GDP per capita growth but this is not a perfect measure.
  - Measuring incomes
    - Atlas Methods
      - Take each state's per capita income, then translate it into a common currency (usually USD) so they can be compared.
      - A rolling average of exchange rates may be used in order to smooth out fluctuations.
      - This method has the benefit of making incomes comparable around the world, which is useful for measuring development (which is often considered in relative terms).
      - However, as it only uses per capita income and is not adjusted for Purchasing Power, the Atlas method is not a comparison of *real* incomes - and so is relatively limited in its usefulness when assessing actual development levels.
    - PPP generally shows that poorer countries are doing better than their per capita income level may make it seem, as goods are generally cheaper and real incomes are higher (though still relatively low).
  - Distribution of Incomes
    - Per capita income does not measure distribution of income - equality is an important concern when considering development.
  - Other measures
    - Human Development Index
      - Captures various facets of development from education to lifespans to incomes.
      - HDI generally correlates with per capita income despite it seeming to be a more accurate measurement.

# Week 2 - Theories of Economic Growth and Development Traps

  - Rule of 72
    - Dividing 72 by the annual rate of growth will give the approximate number of years it will take for incomes to double
  - What creates growth?
    - Endowments, luck, politics, infrastructure etc.
  - The Solow Model
    - Consumption Side:

      $$ Y_t = C_t + S_t $$

      - Total income is comprised of consumption and savings for the year.
      - This is distributed among a labour force $$N$$ which grows at an exogenous rate.
      - The savings rate is the among of total income saved:
      $$ S_t = s*Y_t $$
      - Thus Consumption is:

      $$ C_t = (1-s)*Y_t $$

    - Production Side

      $$ Y_t = A_t * F(K_t, L_t)$$

      - Where $$A$$ is Total Factor Productivity (or technology), $$K$$ is capital and $$L$$ is labour, all at time $$t$$
      - This production function have several key characteristics
        1. Postive marginal product on inputs (each additional input increases output by some amount)
        2. Diminishing marginal product of inputs (each additional input increases out by less than the previous input did)
        3. As the level of input $$\to \infty^+$$ the marginal product of that input $$\to 0$$
        4. These inputs exhibit constant returns to scale:
        $$ F(\lambda K,\lambda L) = \lambda * F(K, L), \lambda > 0 $$
      - This production function is often expressed as a Cobb Douglas function:
      $$ Y_t = A*K_T^\alpha *L_t^{1-\alpha}, \alpha > 1 $$
      - Per capita output is simply output divided by the labour force $$L$$:
       $$y_t= \frac{Y_t}{L} = A_t * F(k_t) $$
        - Per capita output grows over time due to capital accumulation and technological gains, but at a diminishing rate (due to characteristic 2, above).
    - Decomposing Growth
      - Per capita income differences between states might be due to higher capital or TFP
        - More specifically, these could be because of a more skilled workforce, stronger institutions and infrastructure, more efficient markets etc.
    - Capital accumulation
      - Capital accumulates from investment $$I$$, which is simply savings $$S = s*Y_t = s * (A_t * K_t)$$, and is depleted by depreciation $$\delta$$
      $$ K_{t+1} = (1-\delta) * K_t + (s*Y_t)$$
      - Per capita accumulation is given:
      $$ k_{t+1} = \frac{1}{1+n}*[(1-\delta) * k_t + (s*y_t)]$$
      $$ k_{t+1} = [(1-\delta) * k_t + (s *[A_t * k_t^{\alpha}])]$$
    - Despite capital accumulation, output growth will eventually slow to a steady state in the absence of technological progress.
      - This happens because the depreciation of capital is equal to the capital added from savings, cancelling out any accumulation.
    - Technological differences
      - TO DO
    - Skill Formation
      - Let $$E_t = e_t*L_t$$ where $$e_t$$ denotes the skill and knowledge of the average worker
      - This makes the Solow Model:
        $$ Y_t = A*K_T^\alpha * (e_t * L_t^{1-\alpha}) $$
      - Dividing output by $$E_t$$ gives us a measure of output per 'effective worker'
      - The growth of the labour force is also contingent on the growth of skills:
      $$ L_{t+1} = (1 + \pi)(1 + n)L_t $$
      - Due to the growth of the effectiveness of a unit of labour (growth rate $$= \pi$$) it is possible to have continuous growth as long as $$\pi > 0$$
  - Harrod-Domer Model
    - If we assume a constant marginal product of capital, the growth of output per capita will be the same as the growth of capital per capita
    - TODO
    - This tells us that the easiest way to increase growth is to increase the savings rate $$s$$.
    - This advocates for increasing savings even at the expense of consumption, and putting that saved output into capital investment.
    - However, this naturally reduces demand which has effects on growth too.
    - This model is not empirically born out.
  - Convergence and Divergence
    - Two countries with similar parameters should have a similar per capita income in the long run
    - Unconditional convergence assumes all countries have the sameparameters which is unrealistic - thus we use conditional convergence toaccount for the unique factors in each state.
    - This will be apparent in the convergence of growth rates, not percapita incomes.    

# Week 3 & 4 - Inequality

  - Development Patterns
    - Growth rates are often greater for poorer countries
      - They are further from the steady state and transition dynamics suggest their growth will diminish as they approach the steady state.
      - However, some countries will simply have a different steady state
    - Human Capital can explain some of the differences between empirical outcomes and theoretical results
      - let $$H = $$ Human capital

      $$Y = AK^\alpha H^\beta L^{1-\alpha - \beta},  \alpha, \beta \in [0,1], \alpha + \beta < 1 $$

      - Savings can be allocated to adding capital or improving human capital
        $$ (1+n)h_{t+1} = s_h y_t + (1- \delta)h_t $$
      - Thus human capital is endogenous, and can explain why some states have differing steady states.
  - Development Traps
    - What might attenuate growth in an economy?
      - Variation in parameters of the Solow Model such as savings rate, depreciate, population growth or technological growth.
      - Low incomes can exacerbate these issues and leave an economy in a lower steady state than they could otherwise achieve - a development trap.
    - Types of trap include:
      - Historical Dependence
        - Increasing returns to scale can create complementaries, entrenching a certain process
        - As new and more efficient processes arise, if the old entrenched process persists and the new process is not implemented then output growth will suffer
        - This requires increasing returns to scale, a slow uptake of new technology (for any reason) and imperfect or missing credit markets (who could otherwise reallocate credit to firms who do implement new processes, forcing firms to adapt or perish).
      - Coordination failures
        - Developing economies might not have the knowledge or infrastructure to effectively coordinate input levels to their most efficient level
        - Modern economies require a vast range of services to function, many of which are capital intensive.
        - States that don't implement these effectively can see growth fall behind comparable states.
        - Big Push Theory suggests that developing economies need to invest in large infrastructure projects, and that insufficient investment will be effectively wasted.
          - Indivisibility of inputs (Increasing RTS) means large investment is needed to escape the trap
          - Indivisibility of demand is also a factor - if there isn't sufficient demand for a good (say automobiles, due to low wages) then there will be nothing to facilitate production growth in this sector.
          - Indivisibility in the supply of savings is another issue - low incomes have lower savings (regardless of savings rate) and thus lower investment.
    - Inequality
      - Income distribution
        - Income is made up of gains from wages, rents or profits.
        - Functional Distribution is the allocation of income into these three groups
        - Personal Distribution is the allocation of income between households.
        - Ownership of factors of production (land, capital) determines how personal distribution is allocated from functional distribution.
        - Distribution of consumption is a better measure of inequality, as income distribution can be hard to measure, especially in economies where barter or domestic production may not be easily recorded.
      - Measuring inequality
        - Inequality measures should meet these four criteria in order to be a 'good' way of measuring inequality:
          1. Anonymity: the identity of who earns income should be irrelevant.
          2. Population Principle: The size of the population being measured should not matter, and populations of different sizes should be comparable.
          3. Relative Income Principle: Absolute incomes are irrelevant to inequality discussions, so only relative incomes should be taken into account.
          4. Dalton Transfer Principle: A transfer from rich to poor should always increase the inequality measure, and vice versa.
        - A good measure also has a numerical component in order to make it convenient for comparing different states.
      - Lorenz Curve
        - A curve that visually depicts inequality.
        - To compute the Lorenz Curve:
          1. Order incomes from smallest to largest
          2. Calculate the sum of all incomes
          3. Divide population into quintiles and determine the sum of incomes within each quintile
          4. Calculate the proportion of total income within each quintile, and then calculate the cummulative proportion of total income (so the 5th quintile should contain 100% of income).
          5. Graph the quintiles, the cummulative proportion of income and a 45 degree line (the line of perfect equality)
      - GINI Coefficient
        - A number from 0 to 1. As inequality rises GINI $$\to 1$$.
        - Derived from the Lorenz Curve
        $$ GINI = \frac{Area Under Line Of Perfect Equality - Area Under Lorenz Curve}{Area Under Line Of Perfect Equality} $$
        - The area under the line of perfect equality is $$0.5$$
        - A good measure that is useful for cross country comparisons
      - Range
        - A crude measure that is only useful in the absence of better data.
        $$ R = \frac{1}{\mu} * (y_{max} - y_{min}) $$
        - Where $$\mu$$ is mean income, $$y_{max}$$ is the highest income and $$y_{min}$$ is the lowest income.
        - As this ignores the distribution of incomes (and indeed all incomes between the maximum and minimum) it cannot satisfy the Dalton Principle unless the transfer is between the poorest and richest income earners.
      - Kuznets' Ratio
        - A ratio of average income in the top fraction (any fraction) vs average income in bottom fraction.
        - Easy to compute but again fails Dalton's Principle unless transfers involve two income earners in the measured fractions.
      - Mean Absolute Deviation
        - Divide the population into groups where each individual $$i$$ earns the same income $$y_i$$.
        $$ MAD = \frac{1}{\mu*n} * \sum_{j=1}^m n_j * |y_j - \mu | $$
        - MAD inequality is proportional to the distance from the mean income (greater or lesser is irrelevant).
        - This measure is insensitive to the Dalton Principle but does cover the entire income distribution.
      - Coefficient of Variation
        - The standard deviation of incomes divided by the mean.
        $$CoV = \frac{1}{\mu} * \sum_{j=1}^n \frac{n_j}{n} * (y_i - \mu)^2
        - Satisfies all four principles
    - Growth and Inequality
      - Growth usually, but not always, reduces inequality
      - Inequality will generally slow growth
      - Inequality was thought to follow an inverted U shape:
        - As economies industrialised, top incomes would rapidly rise. As the industrialisation process continues, more people move into industrial work and more incomes rise, lowering inequality.
      - Data doesn't bear out this relationship, though there is some connection - it's just more complicated than this!
    - Other causes of Inequality
      - Systematic forces such as colonialism, apartheid, racism, gender relations etc.
      - Education policies
      - Privatised ownership of public services
      - Political entrenchment and/or corruption
    - Reducing inequality
      - Build economic infrastructure to facilitate growth
      - Improve health and education outcomes
      - Implement fiscal policy (transfers or spending) that supports growth
  - Galor Ziera Model
    - Describes the effect of unequal access to education on inequality, education attainment and growth.
    - Essentially, it explains (one of) the links between equality and growth
    - Initial distributions determines whether an economy will coverge to a higher or lower steady state.
    - Inequality compounds - households with greater incomes (and likely wealth) will be able to give their children better access to education, helping them to attain greater incomes. This cycle feeds back over and over.
    - The Model
      - Consider an 'overlapping generations' model with two periods: childhood and adulthood.
      - Each agent has two choices:
        1. Work unskilled labour
        2. Invest in education, then work skilled labour
      - The production side can use either unskilled labour, or skilled labour plus capital to produce output.
      - Let $$x$$ be the inheritance an individual receives from their parents, and $$h$$ be the cost of education.
        - If $$x >h$$ , agents can pay for education and work skilled labour without accruing debt. They will earn a wage $$W_s$$.
        - If $$x < h$$ , agents will either forgo education and earn wage $$W_n$$, or go into debt to afford education (which they will repay at interest rate $$i$$).
        - As this interest rate will be greater than the prevailing rate $$r$$ (due to risk premiums), wealthier agents will be able to afford this debt more easily.
          - The borrowing rate is:
          $$ i = \frac{1+\beta r}{\beta - 1}, \beta >1$$
          - where $$\beta$$  is the evasion cost of evading the debt payment
        - People inheriting $$x > h$$ will progressively get richer over each generation, as those going into debt to afford education keep less of their earnings.
        - However, the more individuals investing in their education, the greater overall output growth will be.
  - Conclusions
    - Countries with more inequality will grow more slowly
    - The effect of inequality in a poor country is that it allows some people to earn enough to improve human capital - leading to more growth than otherwise possible.
    - As countries get richer, inequality simply prevents everyone from improving their human capital, and attenuates growth.
    - Macroeconomic shocks will negatively effect wages, so unskilled wage earners with greater incomes will give their offspring the best chance at changing sector to one with higher wages.
    - Human capital is proportional to GDP generally.
    - World interest rates determine the ability of all people to invest in their human Capital
    - Inequality harms rich countries more than poor countries.

# Week 5, 6 & 7 - Poverty

# Week 8 - Female Empowerment

# Week 9 - Agriculture & Development

# Week 10 & 11 - Credit Markets

# Week 12 - Corruption
