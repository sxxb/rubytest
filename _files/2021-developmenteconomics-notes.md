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
    - Unconditional convergence assumes all countries have the same parameters which is unrealistic - thus we use conditional convergence to account for the unique factors in each state.
    - This will be apparent in the convergence of growth rates, not per capita incomes.    

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

        $$CoV = \frac{1}{\mu} * \sum_{j=1}^n \frac{n_j}{n} * (y_i - \mu)^2$$

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
        - If $$x < h$$ , agents will either forgo education and earn wage $$W_n$$ , or go into debt to afford education (which they will repay at interest rate $$i$$).
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

  - Poverty is the lack of 'sufficient' resources. However, the level of sufficient resources is not objective and depends on how we wish to measure it and what we want to do with our measurements.
    - Some definitions are:
      - $1.08/day (1993 PPP) - the level of 'Extreme Poverty'
      - $1.25/day (2005 PPP) - Millenium Development Goal benchmark for poverty
        - In 1990, 50% of the world was below this line. Now only 14% are (2015).
      - $1.90/day (2009 PPP) - current benchmark
    - Local vs National poverty is treated differently
      - The poorest within a poor society are generally those who are unable to work (and in the absense of a social welfare system, have little to no income). These people may be elderly, unwell, disabled or otherwise unable to work.
      - Women are also subject to this phenomena, especially widows, in countries without economic opportunities for women (who may have missed out on educational opportunities etc.)
      - Generally, regardless of income, those who are unable to attain basic needs such as food, shelter, healthcare and education are considered to be in poverty to some degree. Regardless of societal wealth, this definition serves us well as it identifies those who need the most assistance within any society.
      - National Poverty (which states are poor) is harder to define.
        - This may be measured by something as simple as 'do most people have enough to eat' or may involve inequality metrics etc.
        - Eagel's Law: As people become better off, they spend a smaller proportion of their money on food.
          - This means using food consumption in richer countries is a poor metric of poverty - it may be easy to access food in a rich country, but housing or healthcare costs may be out of reach of many people, which is still a form of poverty.
    - Absolute vs Relative Poverty
      - Absolute poverty: income below a fixed level, at which point it is impossible for someone to meet their basic needs
        - This compares households based on a set income level that will vary between countries based on price levels.
      - Relative poverty: Earning less than 50% of the average household income

        $$\frac{1}{2}*\mu$$

        - This metric is relative to circumstances and an individual can enter poverty despite their material conditions being constant by being 'left behind'. This highlights the role of inequality in determining poverty.
    - Consumption vs Income
      - Consumption is a more accurate measure of poverty - if domestic agriculture provides much of the food for a household, their income won't measure their actual consumption level, perhaps providing a misleading picture of the household's poverty.
      - However, consumption is practically difficult to measure. Income data is much easier to acquire (and compare) and thus is used instead, despite it being an incomplete metric.
    - Poverty Line
      - A simple average of the National Poverty Line for 15 'very poor' countries, normalised for PPP and converted to $2011 using each country's individual CPI.
      - Currently the World Bank sets the poverty line at $1.90 ($2011)
    - Is Poverty the same as Hunger?
      - It's similar but not the same - a household in poverty with some arable land could produce sufficient food to not be hungry but may lack income or access to services that would truly lift them from poverty. However, the two very often occur simultaneously.
  - Poverty measures
    - Headcount Index
      - The population below the poverty line divided by the total population. Simple but lacks detail (how bad is their poverty? etc.)

      $$ HCI = \frac{H}{N} $$

    - Poverty Gap Ratio
      - Ratio by which is mean income of poor households falls below the poverty line.
      - Indicates poverty level but not distribution of poverty within the group.

      $$ PGR = \frac{1}{N} * \sum_{i=1}^{HCI} (\frac{z-y_i}{z}), z = poverty.line $$

    - Income Gap Ratio
      - The totals of income shortfalls below the poverty line, as a fraction of the minimum total income if all the poor households were brought out of poverty. Essentially the ratio of how much more income is needed to eliminate poverty.
      - Good but still doesn't measure severity of individual poverty, or the effects of transfers between households.

      $$ IGR = \frac{\sum_{i=1}^{HCI} (z-y_i)}{z - HCI} $$

    - Foster Greer Thurbecke Measure
     - The Income Gap Ratio, where poorer individuals' incomes are weighted more in the measure.
     - This ensures degree of poverty is included in the measure.
     - The weighting is given by $$\alpha$$ . As $$\alpha \to \infty $$ the weight on poorer incomes increases.

     $$ FGT = \frac{1}{N} * \sum_{i=1}^{HCI} (\frac{z-y_i}{z})^\alpha, \alpha > 1 $$

  - The Psychological Lives of the Poor (2016)
    - Applies two system model of the human brain to Poverty
      - System 1 is intuition & instinctual
      - System 2 is logical & rational
      - System 1 is used more when an individual is under stress
    - Aims to understand the decision-making process of people in poverty (who experience more stress due to a lack of resources)
    - More stress/mental load tends to lead to more impulsive decision-making with a higher discount rate for future values.
    - Poverty effects 'mental bandwidth' (leading to individuals relying more on System 1 as System 2 overloads)
      - Poor nutrition or caloric deficit affects mental capacity and causes brain to allocate more resources to finding food in the short term.
      - Alcohol consumption is a response to overload but also negatively affects mental capacity, leading to a feedback effect.
      - More time dedicated to financial management reduces bandwidth for other activities. If money is not an immediate issue, other factors can be considered when making decisions that may have better longer term outcomes (besides the obvious benefit to money allowing a greater set of decisions to be chosen.)
      - A lack of sleep, pain, noise pollution and mental health all reduce bandwidth and cause individuals to rely more on System 1.
    - Effectively, the lack of bandwidth that people in poverty experience reinforce poverty due to diminished decision making ability. This implies some degree of intervention is required to give people in poverty the ability to 'help themselves' by lifting them out of the immediate stress caused by poverty.

  - The Economic Lives of the Poor
    - Describes what the lives of 'poor' people look like in 13 countries.
      - Poor: living on less than $2.16/day (1993PPP)
      - Extreme Poor: living on less than $1.08/day (1993PPP)
    - The extreme poor do not put all income into food (even if that puts them under their caloric requirements) and instead allocate some income to alcohol and tobacco.
      - This is probably a coping strategy, especially if they would be in caloric deficit even if they didn't purchase alcohol or tobacco.
      - TVs or Radios are also examples of this tradeoff - marginal benefit of feeling better outweighs the costs of hunger.
      - Festivals, weddings, funerals and other celebrations are also important (both for wellbeing, but also for maintaining social connections that may be of benefit in the future).
    - Living arrangements allow for sharing of costs.
      - ie. a TV or Radio can be enjoyed by 1 or 10 people relatively easily, so sharing those things makes economic sense.
      - Also, as poorer families will often have more children (to combat infant mortality rates, to increase likelihood of adult children being able to care for elderly parents, or due to a lack of contraception/women's agency) they tend to live in larger households.
    - Illness & Stress are common issues, as they are often exacerbated by hunger and poverty, creating a feedback loop.
      - If illness or stress become acute they may limit or prevent a person from working, reducing their income and making it even harder to recover.
    - Little investment in education occurs. It is harder to justify the future benefits relative to the immediate costs in poverty.
      - Public education matters, but is often lacking in developing countries.
      - This is also somewhat of a gendered issue - women tend to not be provided the opportunity for education afforded to men, but this is improving.
    - 47% of urban poor people own a business of some kind.
      - This excludes farms too (not urban).
      - Most don't have employment as we understand it in the west, but instead source their own income.
      - Many have a business AND a labour job too, or multiple businesses. Diversified sources of income reduce risk.
      - Median family household has 3 workers and 7 occupations between them.
    - Migration is common (most temporary) for the purpose of finding work.
      - This is usually only a month in duration (perhaps for a harvest season)
      - Permanent migration is much less common - possibly de to the costs and risks of moving away from social networks, or a lack of geographic and cultural knowledge. Also, the obvious actual costs of moving might be prohibitive.
    - Specialisation is rare, due to the time and effort required for education. Though the payoffs in the long run might be high, the present costs cannot be met.
    - Scale issues are common - consolidation and specialisation makes logical sense but is risky (only having one person who can do a task means if they become ill etc. there is a great shortfall in labour).
    - Access to Credit markets
      - Loans are often provided informally by community members rather than by institutions.
      - This is generally more expensive, but easier to obtain.
      - Interest rates decrease as land holdings increase - a tangible asset to provide for collateral.
      - Formal lending is hard to access as institutions don't always have the ability to assess or monitor applicants effectively. Local lending overcomes this.
      - Default rates are low, but delayed payments are common - incomes are not smooth, particuarly in agriculture.
    - Savings & Insurance
      - Formal options are limited.
      - Informal options exist, but many people go without insurance.
      - Social networks instead provide a form of insurance - hence the importance of maintaining these connections.
    - Land Markets
      - Poor households often own land, though not always officially (ie. without documentation, making it hard to borrow against land)
      - This also poses a problem for selling land, as a buyer likely requires a title.
    - Infrastructure
      - Mixed outcomes - some poor households have running water and electricity, others have neither.
      - Healthcare and education services are limited but improving. Internet or other communications technology may make big inroads into these problems in the near future.

  - Poverty Questions
    - Why don't poor households eat better?
      - The marginal gain from other activities (entertainment etc.) is greater than being fully satiated.
    - Why don't poor households rent more land?
      - While this would benefit them as they could get efficiency gains etc. they often lack the income/credit access/insurance against risks etc. that would allow them to make these decisions. They likely would if they were able to.
    - Why don't poor households specialise more?
      - While this might have long term payoffs, it is rarely worth the short term costs. Poverty is a day-to-day problem with a short horizon, and long term benefits to education are not worth the loss of labour in the short term.
    - Why are so many poor people 'entrepreneurs'?
      - A lack of capital availability prevents capital growth, allowing a lot of small businesses to exist without the capacity to grow and muscle out competitors.  
    - Why don't the poor investment in education?
      - Temporal payoff issues, but also uneducated parents may not be able to accurately value education for their children.
      - Also, schools may not have institutional trust we have in developed world.
    - Why don't the poor save more?
      - Saving in the absence of institutional saving options is risky (you might be robbed/burgled), plus the payoff of spending now is greater than the payoff of saving for some future gain.
      - Also, if you have savings and your social network knows this, they will come to you when they are in need (social insurance) which depletes savings.
    - What do we do about poverty?
      - Create institutions to provide for and protect people in poverty.
      - Develop industry to provide higher wages (and automate work that is necessary but time consuming).
      - Give people more resources!

  - Fighting Poverty & Randomised Control Trials
    - There is no one single answer to poverty.
    - Randomised Control Trials (RCTs) help us evaluate policy proposals in situ, to compare poverty alleviating policies against a control population within unique contexts.
      - RCTs avoid selection bias and limit to some extent reverse causality issues.
    - How do we establish causality? Does X really cause Y?
      - Comparing populations with and without X (the treatment variable) to measure the difference in Y between them, allowing us to estimate the effect of X on Y.
      - The treatment variable should be exogenously altered (ie. not naturally occurring) to truly measure causality.
    - There are alternatives to RCTs but are more complex:
      - Instrumental Variables
      - Regression Discontinuity
    - RCTs minimise publication bias and are more straightforward than econometric methods - and are perhaps easier to explain to the layman.
    - RCTs have drawbacks however:
      - They don't explain why X effects Y - only that we believe it does. This means it may not be applicable to other contexts.
      - Selecting populations to measure can introduce bias, even if the selection of the individuals receiving the treatment variable within the population is random.
      - Observation can effect behaviour inadvertently, even when great care is taken to avoid it.
      - RCTs are costly at large scales (are effectively a microcosm of implementing a policy), but large scales are required to reduce variance in results.
      - RCTs aren't good at evaluating complex issues with many causes - a simple causality is rare in economics!
    - RCTs generally show that giving people more resources helps them! Crazy stuff.

# Week 8 - Female Empowerment

  - Female Empowerment and Development
    - A  two way causal relationship probably exists - women having more agency helps development, and development gives women more options (therefore agency).
    - As development empowers everyone who receives its benefits, but gender inequality is common in developing countries, an increase in living standards often helps women more (as they have 'further to go').
      - The division of domestic labour (and the automation of that labour that is possible as incomes rise) probably plays a part.
    - Distribution of limited resources in families often favours boys (who are culturally expected to care for their parents, while women are married off into another family) so there is a significant gap between men's and women's outcomes.
      - This means increasing overall resources makes more resources available for female children, giving them more opportunities for education etc.

  - Specific Mechanisms
    - Fertility and Childbirth Mortality
      - Development of health resources and nutrition reduces maternal mortality
        - This has led to a convergence in outcomes for girls and boys in Sri Lanka for example
      - As education levels for women increase, 'fertility' (ie. children per mother) decreases - both because combatting infant mortality reduces the need to have many children, but also women have more agency to make reproductive decisions.
      - Pregnancy and motherhood reduces incomes - women generally tend to take the bulk (if not all) of the responsibility for raising kids.
        - Thus having fewer children reduces these periods of low or no income for women.
    - Education and Work
      - As labour opportunities for women arise, the benefit of education for girls eventually outweighs the costs of losing a domestic labourer. This creates a feedback loop: more educated women > better wages and conditions for female labourers > more incentive to provide women with education etc.
      - Women do more domestic labour and sell their labour less - as domestic labour requirements drop (due to technology, available due to growing incomes) women are able to pursue work opportunities outside the home.
    - Women's Rights
      - Giving women more rights (and safeguarding/enforcing existing rights) means they are able to actually pursue hypothetical opportunities such as working outside the home. This helps to protect their gains and enable women to pass on their gains to their children (of all sexes), empowering further generations.

  - Is Development Enough?
    - Probably not, but it does make a difference and is thus worth pursuing.
    - Social changes (attitudes etc.) are required too for women to be truly equal.
    - Development and normalisation of women in paid work etc. will help to change attitudes.
    - Some cultural institutions are fundamentally incompatible with women's empowerment - this is difficult to contend with. Cultural imperialism can be more damaging than inequality. It's a tricky issue but development is an 'agnostic' way to improve women's lives.

  - Can Women's Empowerment Cause Development? (2012)
    - There are two rationales:
      - Gender equality is a good thing unto itself - we should strive for equality.
      - Gender equality is more efficient and a better way to organise an economy, regardless of whether we believe it to be 'right'.
    - Education provides greater outcomes for women AND gives women a greater ability to influence decision making, which produces further positive outcomes.
    - Mother's education correlates with better childhood outcomes for their offspring.
      - But is there truly a causation? Or do factors that improve women's education in general also improve childhood outcomes in general?
      - This is hard to say but the correlation alone suggests policies that improve education for women are good, regardless of true causal relationship.
    - Education is the first dimension of empowerment with various flow-in effects.
      - Both parents' education matters, not just the mother's.
      - However, there are more factors at play: independent decision making is also important; though this is affected by education and income levels. If women don't have independence in the form of their own incomes, they may be dependent on their partner and thus not truly able to assert their agency in decision making.
      - Property rights are a part of this - ensuring women can own/inherit/bequeath property ensures prosperity can stay in women's hands, not just passed to husbands.
      - Voting rights are obviously also important; they can create and enforce gains for women, and secure further rights such as education, healthcare and property rights, both in general but especially for women-centric issues like childbirth.
    - Economic development is a key part of women's empowerment and vice versa, but neither are a magic bullet solution and policies are needed to address both.

# Week 9 - Agriculture & Development

  - Agriculture is a large portion of GDP in the developing world.
    - Much of this is subsistence farming - ie. not commercial farming.
    - Economic development must thus target agriculture, most likely to restructure economies to be less dependent on agricultural work.
    - The Marginal Product of Labour in ag. sectors is low in developing economies:
      - Why?
        - Low labour force mobility (apart from short term migration)
        - Slow productivity growth (most ag. sector productivity growth comes from technology and capital)
        - Economies of scale - small scale subsistence farming is less efficient than large operations
        - Agency problems
    - Agency Theory
      - aka Contract Theory, or Principle-Agent Model
      - Production occurs within a unit (ie. a firm) with unique factors that need to be understood to illuminate issues within ag. sector.
      - These include why workers work more or less (elasticity of labour), how their compensation works (piece rate vs. wage vs. salary) and what drivers capital investment decisions?
      - If land is cultivated by labour, output is a function of labour.

      $$ y = f(L) $$

        - let $$w$$ be the wage, and the opportunity cost of working. Output price is normalised (ie. $$p=1$$ )
        - as with any output function, a landowner will cultivate their land to maximise their output subject to their constraints:

        $$ \max f(L)-wL $$

        $$ \frac{\partial}{\partial L} (f(L)-wl) = 0 $$

        $$ f'(L) = w $$

        - for a landlord to get the optimal effort $$L^*$$ from a worker (where the landlord's benefit is maximised [see notes]) they will offer wage $$w$$.
        - This renders them a benefit given by

        $$ surplus = f(L)-wL $$

        - Suppose only output, not labour, is observable. How does a landlord price labour in this case?
          - This occurs when a landlord cannot supervise their workers all the time due to a range of issues.

        $$ R = \alpha y + F $$

        - where $$R$$ is rent, $$\alpha$$ is a share of output, $$y$$ is output and $$F$$ is a fixed level of rent.
            - Rent can be comprised of a fixed and/or variable component.
            - A sharecropping contract where the rent is paid in kind from a harvest: $$ R = \alpha y, F=0 $$
            - A rent contract where rent is simple a fixed amount regardless of output: $$ R = F, \alpha = 0 $$
            - A wage contract where a worker is paid a portion of output less a fixed rate (the landlord's surplus value): $$R = \alpha y + F, \alpha = 1, F < 0 $$
        - Landlords will set rent such that:

          $$ f(L^*) - F - wL^* = 0 $$

          or

          $$ f(L^*) - F = wL^* $$

        - Whereas a sharecropper will maximise their utility:

          $$ (1 - \alpha) * f(L) - wL $$

          - given that  $$1 - \alpha \le 1, L_s \le L^*$$, which means that the below optimal level of labour will be supplied.
          - This means that the landlord cannot get the optimal output - this is the agency issue.
          - Rents are lower and even if $$F>0$$ profits will still be less than the maximum under a fixed rent contract.
      - if Sharecropping is inefficient, why does it exist?
        - Sharecropping accounts for uncertainty - if an exogenous shock such as a drought occurs and reduces a harvest, the rent will be lowered too. This means that risk is mitigated, a desirable outcome for both parties to some extent.
      - Sharecropping is still inefficient - there is no incentive to provide the optimal level of labour on the labourer's end.
      - This may be a necessary cost to manage the risks of agriculture in developing economies though - optimal contracts provide some certainty for both parties (return and tenure) which comes at the cost of output.
      - A solution: redistribute land to workers, allowing them to be both the owner and the labourer, solving the agency problem.
        - Hmm is that the sound of the CIA?

  - Farm Size & Productivity
    - The agency problem suggests that small, individually owned farms might be more productive. They ensure the optimal level of labour is provided and that maximises output - in theory.
    - However this is not the case in reality:
      - Some technologies are not cost effective at small scales, even if a small farmer could access the credit required to obtain those technologies.
      - Tenants often have no collateral and may not be able to afford credit, if they can access it at all.
      - This leads to an efficiency trap that could be overcome with credit programs
    - Labour Markets
      - If there is a possibility of unemployment, the opportunity cost of labour is lower (ie. it is not the wage obtainable elsewhere, but some fraction of this which is caused by the risk of not getting a job at all).
      - Thus there is a greater likelihood of small farms using family labour to cultivate land.
      - As the wage for family members $$w_f < w^*$$ marginal costs are lower and labourers will do more work, increasing output.
      - Small farms are more likely to use family labour, thus they enjoy this productivity boost more than larger firms.

  - Collaboration
    - Small farms could perhaps unite to purchase capital intensive technology to improve all their outputs, but this creates a Free Rider problem.
    - Given Land and Sales markets are unable to resolve efficient land use, what other options exist?

  - Land Reform
    - A range of policies from rental protections to redistribution.
    - Overcomes a lot of issues with land use but is politically difficult - often comes at the expense of the wealthiest people who are most likely to be able to successfully oppose the policy.
    - Many land reforms require some action by tenants that will upset landlords (ie. formal registration of land contracts) which upsets landlords who prefer no oversight, which risks the tenants tenure in the long run.
    - There is no easy solution that solves land use issues without upsetting the status quo.  
    - That's definitely the CIA I hear...  

  - How Can Agricultural Productivity Growth Reduce Poverty?
    - Poor countries have a large proportion of their labour force in the agricultural sector
      - Increasing productivity thus increases many peoples' outputs, and therefore incomes.
      - As food prices fall (supply grows) workers can start to afford other goods beyond food. This creates a demand for manufactured goods.
      - As poor workers have few assets, asset price growth does nothing to alleviate poverty. This must come from wage growth instead.
    - By increasing the land to labour ratio, wages will rise.
      - Doing this requires complementary inputs such as capital.
      - Wage rises also effect other sectors, lifting wages across the economy.
    - By adding efficiency-improving technologies, higher output per input (land and labour) can be obtained
      - Land owners will demand more manufactured goods, driving industrial good demand
      - This creates jobs in industry, driving wages up more.
    - Developing economies will often export primary goods and import more advanced manufactured goods, or the technology to create them, which brings both capital and knowledge to an economy.
    - As the linkages between developed and developing economies grow, a third sector arises to faciliate these: services.
      - This includes things like financial services, but also machinery repairs, transport, energy etc.
      - Domestic and consumer services follow as wages rise - restaurants, cleaners, retail etc.
    - Crop yields continue to grow as things like high yield crop variants, fertilisation and irrigation become viable.
    - As the need for subsistence farming falls, the ag sector will pivot to the most profitable crops, which are usually better suited to the climate and geography as well as being higher value, further increasing incomes.
      - Profitable crops may require capital to process etc. which favours richer farmers. This increases inequality generally.
      - New crops require new knowledge to successfully cultivate them so the switch will be slow - many farmers may be able to switch but prefer to avoid the risk and stick with what they know.

# Week 10 & 11 - Credit Markets

  - Uses for Credit Markets
    - Income smoothing: in agriculture in particular, revenues and expenses occur at different times and credit helps balance out cash flows.
    - This has the additional benefit of allowing more long term thinking rather than worrying about having cash at a particular time to purchase seeds, pay harvest workers etc.

  - Issues in Credit Markets in Developing Countries
    - Variance or Uncertainty in debtors' ability to repay
      - This results in higher interest rates to manage risk, reducing availability of credit
    - Voluntary & Strategic Default
      - The punishment for default may not be sufficient (or able to be enforced) to deter defaults, even in cases where the debtor could pay.
    - Borrowers may not want to do what the lender wants them to do with their credit. For instance, borrowers may want credit for consumption while lenders only wish to lend for specific projects with a good likelihood of a positive return, even if the borrower could repay using existing cash flows.
    - Poorer borrowers may only have their labour to offer as an asset for collateral, which institutional lenders will not accept. This prevents them from obtaining credit from formal credit markets, with a host of flow-on effects.

  - Informal Credit Markets
    - Informal lenders such as shopkeepers or landlords in a community may be more willing to lend to borrowers despite the above issues.
    - They are likely socially proximate to the borrower and thus have a better understanding of the borrower's intentions and can monitor them to ensure repayment.
    - They may also be willing to accept non-standard payment arrangements like labour or goods.
    - However, there are also downsides:
      - Informal credit markets usually have higher interest rates and are less likely to be regulated to prevent usury.
      - There is less oversight and regulation in general
      - The potential high cost to get an informal lender to trust a potential borrower if they do not already have some kind of social connection.
    - Lenders genearlly only lend as a secondary source of income. Their primary roles as a business owner or landlord are often complementary to observing borrower behaviour which benefits both parties by reducing costs and risk.
    - Some informal lenders may have geographic monopolies (that are enforced but also likely arise from convenience) which reduces competition, driving up interest rates.
      - Also, many lenders appear to be unwilling to lend to anyone who goes to more than one lender. This may be a cartel-like behaviour to preserve geographic monopolies or a self-interested decision reflected some risk if someone borrows from multiple people and offers the same collateral to multiple lenders.

  - Lending to the Poor
    - Borrowing interest rates often vastly exceed deposit rates, and borrowing rates can be extremely high
      - In one study (Aleem 1993) rates spanned from 2% to 150%.
    - Credit rates fall with higher borrower net worth and history of repayment - a feedback loop that benefits wealthier borrowers within the poor category.
    - Default rates are generally low
      - The exception is the extreme poor who, when faced with exogenous shocks, are simply unable to pay in any way. These people facer higher interest rates as a result.

  - A Model of Credit Markets
    - The gross interest rate $$R = 1 + r$$
    - The default risk $$= s\%$$
    - The marginal product of capital is thus:

    $$ (1-s)R$$

    or

    $$ (1-s)(1+r)$$

    - If a borrower cannot afford this rate, they will turn to informal credit markets.

  - Another Model
    - A borrower has a business: $$y=F(k)$$
      - Wealth $$w$$ reduces the amount of capital $$k$$ that must be borrowed for the business: $$k-w$$
      - To repay a loan, the borrower repays $$(k-w)*R$$
      - A borrower could default and pay cost $$h$$
      - The cost of capital for the lender if given $$D$$
    - The borrower has a choice; repay the loan or defaults
      - If he repays, his return is:

      $$ F(k) - ((k-w)R) $$

      - If he defaults, his return is:

      $$ F(k) - hk $$

    - Lenders will do their best to ensure $$(k-w)R > hk$$ so they will be repaid. They do this by setting a level of k such that the return from repaying is greater than the return from defaulting.
    - This explains why defaults are low and why the rich borrow more - but doesn't explain intereste rate levels and variation.
    - If we introduce a fixed cost for lenders to monitor borrowers $$c$$ we can solve this.
      - A borrowers interest rate must now be: $$(k-w)R = D(k-w)+c (= hk)$$, and thus $$R > D$$
    - We can rearrange this equation to get:

    $$k = \frac{Dw-c}{D-h}$$

    - We can then substitute and rearrange to find $$R$$:

    $$ R = D + \frac{c(D-h)}{hW-c}$$

    - From this we can see that the interest rate $$R$$ is inversely proportional to wealth $$w$$ and that as $$D$$ rises, $$h$$ will invariably also rise, causing a feedback loop to $$R$$ and $$h$$ that renders $$R$$ to high for poorer borrowers.

  - Microcredit
    - Popularised by the Grameen Bank and Mohammed Yunus, Microcredit is the concept of providing small, low cost loans in developing economies.
    - This may involve group lending, which shifts monitoring costs onto the members of the group instead of the lender, reducing costs. This means a loan is provided to a group of borrowers and each receives part of the loan. They are all liable for the total sum and thus are incentivised to ensure each other are using their credit responsibly to ensure the loan is repaid. This has the side effect of punishing a group for an unfortunate shock that occurs to one or more members of the group.
    - Generally microcredit has been provided to women which helps achieve development goals such as health and educational improvements.
    - There is little unbiased evidence for the efficacy of microcredit but it does appear to be effective.
    - The capital from microcredit can raise incomes enough to have a long term effect on livelihoods - but it is only a small step.
    - There are some fears that it could become a form of usury.
    - Microcredit can help poor people start a sole trader business, but:
      - Not all people want to do this - some prefer to just sell labour, and microcredit is generally not sufficient to help a business expand to the point of hiring other workers.
      - Other barriers may still exist to starting a business
      - Repayment timelines and rigidity make some investments impossible - repayments may begin as soon as 1 week after the principle is lent, which is too short a timeline for many businesses. Other businesses have inconsistent cash flows and repayments cannot be made at regular intervals.
      - This has the effect of selecting for less-risky investments, reducing returns and narrowing the pool of potential borrowers.
    - The focus on 'zero default' may do more harm than good - perhaps more occupied with the programs' reputation than outcomes?
    - But overall the availability of credit to the poor does help some people, and while it is not a silver bullet solution is does create a positive benefit for developing economies.

# Week 12 - Corruption

  - Theories of Corruption
    - Corruption occurs worldwide but countries lacking in strong institutions are most vulnerable, and these tend to be developing economies.
    - Corruption can be understood using a simple cost benefit analysis.
