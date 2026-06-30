const PAY_TABLE = { 
  "777B": [125.52, 239.41, 280.15, 286.94, 293.79, 301.24, 309.61, 316.72, 320.17, 324.52, 327.42, 330.44], 
  "777A": [443.85, 447.45, 451.12, 454.76, 458.40, 462.00, 465.64, 469.22, 472.87, 476.47, 480.09, 483.74], 
  "350B": [125.52, 239.41, 280.15, 286.94, 293.79, 301.24, 309.61, 316.72, 320.17, 324.52, 327.42, 330.44], 
  "350A": [443.85, 447.45, 451.12, 454.76, 458.40, 462.00, 465.64, 469.22, 472.87, 476.47, 480.09, 483.74], 
  "330B": [125.52, 239.41, 280.15, 286.94, 293.79, 301.24, 309.61, 316.72, 320.17, 324.52, 327.42, 330.44], 
  "330A": [443.85, 447.45, 451.12, 454.76, 458.40, 462.00, 465.64, 469.22, 472.87, 476.47, 480.09, 483.74], 
  "764B": [125.52, 239.41, 280.15, 286.94, 293.79, 301.24, 309.61, 316.72, 320.17, 324.52, 327.42, 330.44], 
  "764A": [443.85, 447.45, 451.12, 454.76, 458.40, 462.00, 465.64, 469.22, 472.87, 476.47, 480.09, 483.74], 
  "763B": [125.52, 198.62, 232.42, 238.10, 243.92, 250.02, 256.92, 262.94, 265.60, 270.01, 273.34, 276.56], 
  "763A": [368.14, 371.26, 374.27, 377.31, 380.51, 383.48, 386.33, 389.52, 392.29, 396.50, 400.77, 404.92], 
  "32NB": [125.52, 198.62, 232.42, 238.10, 243.92, 250.02, 256.92, 262.94, 265.60, 270.01, 273.34, 276.56], 
  "32NA": [368.14, 371.26, 374.27, 377.31, 380.51, 383.48, 386.33, 389.52, 392.29, 396.50, 400.77, 404.92], 
  "321B": [125.52, 193.02, 225.86, 231.32, 236.88, 242.91, 249.70, 255.47, 258.21, 261.73, 264.13, 266.58], 
  "321A": [358.02, 360.83, 363.66, 366.61, 369.59, 372.56, 375.48, 378.42, 381.43, 384.27, 387.28, 390.30], 
  "320B": [125.52, 192.22, 224.85, 230.32, 235.86, 241.75, 248.51, 254.25, 256.97, 260.44, 262.83, 265.19], 
  "320A": [356.46, 359.23, 362.07, 365.00, 367.95, 370.84, 373.73, 376.65, 379.59, 382.47, 385.40, 388.27], 
  "739B": [125.52, 193.02, 225.86, 231.32, 236.88, 242.91, 249.70, 255.47, 258.21, 261.73, 264.13, 266.58], 
  "739A": [358.02, 360.83, 363.66, 366.61, 369.59, 372.56, 375.48, 378.42, 381.43, 384.27, 387.28, 390.30], 
  "738B": [125.52, 192.22, 224.85, 230.32, 235.86, 241.75, 248.51, 254.25, 256.97, 260.44, 262.83, 265.19], 
  "738A": [356.46, 359.23, 362.07, 365.00, 367.95, 370.84, 373.73, 376.65, 379.59, 382.47, 385.40, 388.27], 
  "223B": [125.52, 185.31, 216.85, 222.09, 227.46, 233.18, 239.72, 245.24, 247.90, 251.29, 253.58, 255.90], 
  "223A": [343.51, 346.36, 349.15, 351.97, 354.82, 357.69, 360.50, 363.31, 366.11, 368.96, 371.82, 374.66], 
  "221B": [125.52, 177.71, 207.96, 212.98, 218.11, 223.64, 229.89, 235.20, 237.73, 240.99, 243.21, 245.41], 
  "221A": [329.45, 332.18, 334.84, 337.58, 340.30, 343.05, 345.72, 348.44, 351.12, 353.85, 356.59, 359.33], 
  "717B": [125.52, 172.87, 202.31, 207.24, 212.14, 217.57, 223.60, 228.77, 231.20, 234.38, 236.61, 238.62], 
  "717A": [320.81, 323.16, 325.81, 328.46, 330.98, 333.71, 336.25, 338.89, 341.52, 344.18, 346.86, 349.38] 
};

const IRS_RMD_UNIFORM_TABLE = { 
  72: 27.4, 73: 26.5, 74: 25.5, 75: 24.6, 76: 23.7, 77: 22.9, 78: 22.0, 79: 21.1, 80: 20.2, 
  81: 19.4, 82: 18.5, 83: 17.7, 84: 16.8, 85: 16.0, 86: 15.2, 87: 14.4, 88: 13.7, 89: 12.9, 
  90: 12.2, 91: 11.5, 92: 10.8, 93: 10.1, 94: 9.5, 95: 8.9, 96: 8.4, 97: 7.8, 98: 7.3, 
  99: 6.7, 100: 6.2 
};

const SSA_HISTORICAL_DATA = { 
  maxWageBase: { 1985: 39600, 1986: 42000, 1987: 43800, 1988: 45000, 1989: 48000, 1990: 51300, 1991: 53400, 1992: 55500, 1993: 57600, 1994: 60600, 1995: 61200, 1996: 62700, 1997: 65400, 1998: 68400, 1999: 72600, 2000: 76200, 2001: 80400, 2002: 84900, 2003: 87000, 2004: 87900, 2005: 90000, 2006: 94200, 2007: 97500, 2008: 102000, 2009: 106800, 2010: 106800, 2011: 106800, 2012: 110100, 2013: 113700, 2014: 117000, 2015: 118500, 2016: 118500, 2017: 127200, 2018: 128400, 2019: 132900, 2020: 137700, 2021: 142800, 2022: 147000, 2023: 160200, 2024: 168600, 2025: 176100, 2026: 181800 }, 
  awiSeries: { 1985: 16822.51, 1986: 17321.82, 1987: 18426.51, 1988: 19334.04, 1989: 20099.55, 1990: 21027.98, 1991: 21811.60, 1992: 22935.42, 1993: 23132.67, 1994: 23753.53, 1995: 24705.66, 1996: 25913.90, 1997: 27426.00, 1998: 28861.44, 1999: 30469.84, 2000: 32154.82, 2001: 32921.92, 2002: 33252.09, 2003: 34101.55, 2004: 35648.55, 2005: 36952.94, 2006: 38651.41, 2007: 40405.48, 2008: 41334.97, 2009: 40711.61, 2010: 41673.83, 2011: 42979.61, 2012: 44321.67, 2013: 44888.16, 2014: 46481.52, 2015: 48093.56, 2016: 48673.30, 2017: 50321.89, 2018: 52145.80, 2019: 54099.99, 2020: 55628.60, 2021: 58129.84, 2022: 61220.33, 2023: 63310.15, 2024: 65500.00, 2025: 67792.50, 2026: 70165.24 }, 
  bendPoints2026: { first: 1210, second: 7293 } 
};

// Safe external Service Worker connection (Doesn't block button execution)
if ('serviceWorker' in navigator) { 
  window.addEventListener('load', () => { 
    navigator.serviceWorker.register('./sw.js')
      .then(reg => { 
        console.log('Offline Engine Link configured:', reg.scope); 
        reg.onupdatefound = () => { 
          const installingWorker = reg.installing; 
          if (installingWorker) { 
            installingWorker.onstatechange = () => { 
              if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) { 
                window.location.reload(); 
              } 
            }; 
          } 
        }; 
      })
      .catch(err => console.warn('Offline engine waiting for local sw.js file...')); 
  }); 
}

document.addEventListener('DOMContentLoaded', () => { 
  const app = new AppController(); 
  app.init(); 
  window.appControllerInstance = app; 
}); 

// Global Form Event Triggers
document.getElementById('withdrawalStartStrategy')?.addEventListener('change', function(e) { 
  const delayWrapper = document.getElementById('delayDateWrapper'); 
  if (delayWrapper) { 
    delayWrapper.style.display = (e.target.value === 'delayed') ? 'block' : 'none'; 
  } 
  if (window.appControllerInstance) { 
    window.appControllerInstance.state.retirementStrategy.withdrawalStartStrategy = e.target.value; 
    const tier1Input = document.getElementById('wdAge1'); 
    if (tier1Input) { 
      tier1Input.value = window.appControllerInstance.getCalculatedWithdrawalStartAge(); 
    } 
    window.appControllerInstance.validateWithdrawalAgeTiers(); 
  } 
}); 

document.getElementById('withdrawalStartDate')?.addEventListener('input', function(e) { 
  if (window.appControllerInstance) { 
    window.appControllerInstance.state.retirementStrategy.withdrawalStartDate = e.target.value; 
    const tier1Input = document.getElementById('wdAge1'); 
    if (tier1Input) { 
      tier1Input.value = window.appControllerInstance.getCalculatedWithdrawalStartAge(); 
    } 
    window.appControllerInstance.validateWithdrawalAgeTiers(); 
  } 
});
class AppController {
  constructor() {
    this.dom = {
      overlay: document.getElementById('modalOverlay'),
      closeButtons: document.querySelectorAll('.close-x-btn, .cancel-btn'),
      menuButtons: document.querySelectorAll('.menu-btn[data-target]'),
      modalWindows: document.querySelectorAll('.modal-window'),
      careerForm: document.getElementById('careerForm'),
      fortyOneKForm: document.getElementById('fortyOneKForm'),
      tspForm: document.getElementById('tspForm'),
      tableBody: document.getElementById('grandProjectionsTableBody'),
      retirementForm: document.getElementById('retirementForm'),
      socialSecurityForm: document.getElementById('socialSecurityForm'),
      retirementTableBody: document.getElementById('grandRetirementProjectionsTableBody'),
      ssAgeGroup: document.getElementById('socialSecurityAgeGroup'),
      taxProfileForm: document.getElementById('taxProfileForm'),
      pensionForm: document.getElementById('pensionForm'),
      deductionType: document.getElementById('deductionType'),
      itemizedDeductionGroup: document.getElementById('itemizedDeductionGroup'),
      predictCustomBrackets: document.getElementById('predictCustomBrackets'),
      customBracketsContainer: document.getElementById('customBracketsContainer'),
      hsaForm: document.getElementById('hsaForm'),
      iraForm: document.getElementById('iraForm'),
      brokerageForm: document.getElementById('brokerageForm'),
      spouseAccountsForm: document.getElementById('spouseAccountsForm')
    };
    this.state = {
      irsInflation: {
        applyInflation: false,
        estimatedIncreaseRate: '2'
      },
      career: {
        birthDate: '', hireDate: '', hoursPerMonth: '', aircraftSeat: '', 
        retirementStrategy: '', retirementAge: '', retirementCustomDate: '', 
        secondSeat: '', conversionDate2: '', thirdSeat: '', conversionDate3: '', 
        fourthSeat: '', conversionDate4: '', applyPayRaise: false, 
        compoundingRaisePercent: '', contractStartDate: '' 
      }, 
      fortyOneK: { 
        growthRate: '', companyDirect: '', personalTradPercent: '', personalRothPercent: '', 
        currentTradBalance: '', currentRothBalance: '', enrolledMBCBP: false, 
        currentMBCBPBalance: '', growthRateMBCBP: '', foTradProfitSharing: '', 
        foRothProfitSharing: '', captTradProfitSharing: '', captRothProfitSharing: '', 
        month401aFirst: '', amount401aFirst: '', month401aSecond: '', amount401aSecond: '' 
      }, 
      tsp: { 
        growthRate: '', currentTradBalance: '', currentRothBalance: '', 
        annualTradContrib: '', annualRothContrib: '', stopDate: '' 
      }, 
      ira: { 
        iraGrowthRate: '4', currentRothIra: '0', iraOnlyCaptain: false, 
        iraAnnualUnder50: '0', iraAnnualOver50: '0' 
      }, 
      tradIra: { growthRate: '4', currentTradBalance: '0' }, 
      brokerage: { growthRate: '4', currentBalance: '0', monthlyContrib: '0' }, 
      hsa: { 
        growthRate: '4', coverageTier: 'self', currentBalance: '0', annualExpenses: '0', 
        profitSharContrib: '0', monthlyContrib: '0', monthlyContribOver55: '0', 
        stopMonthlyDate: '', stopAnnualDate: '' 
      }, 
      spouse: { 
        iraGrowthRate: '4', currentRothBalance: '0', annualUnder50: '0', annualOver50: '0', 
        tradGrowthRate: '4', currentTradBalance: '0', birthDate: '1979-01-01', 
        hsaGrowthRate: '4', hsaCurrentBalance: '0', hsaMonthlyContrib: '0' 
      }, 
      retirementStrategy: { 
        additionalTrad: 0, additionalRoth: 0, tradGrowth: 4, rothGrowth: 4, 
        strategy: 'Traditional First', withdrawalPercent: 4, withdrawalOption: 'Option A', 
        withdrawalMethod: 'percentage', withdrawalFixedAmount: 0, wdAge1: '', wdAmt1: '0', 
        wdAge2: '', wdAmt2: '0', wdAge3: '', wdAmt3: '0', withdrawalStartStrategy: 'immediate', 
        withdrawalStartDate: '' 
      }, 
      socialSecurity: { incorporate: false, claimAge: 65, manualBenefitEstimate: 0 }, 
      pension: { monthlyAmount: 0, startDate: '' }, 
      taxProfile: { 
        enableCalculations: true, filingStatus: 'single', stateOfResidence: 'ID', 
        deductionMethod: 'standard', manualItemizedAmount: 0, predictCustomBrackets: false, 
        brackets: [ 
          { rate: 10, limit: 11000 }, { rate: 12, limit: 44725 }, { rate: 22, limit: 95375 }, 
          { rate: 24, limit: 182100 }, { rate: 32, limit: 231250 }, { rate: 35, limit: 578125 }, 
          { rate: 37, limit: Infinity } 
        ] 
      }, 
      supplementalIncome: { 
        monthlyAmount: 0, isTaxable: false, 
        monthlyAmount2: 0, isTaxable2: false 
      } 
    }; 

    this.calculatedForecastMatrix = []; 
    this.earningsHistoryCache = {}; 

    // FIXED: Correct context binding wrapper prevents window execution loops
    window.saveNewAccountData = this.saveNewAccountData.bind(this); 
  } 

  init() { 
    this.registerModalEvents(); 
    this.registerFormSubmissions(); 
    this.loadSavedState(); 
  }
    registerModalEvents() {
    // 1. Global click delegation for opening modals safely
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.menu-btn[data-target]');
      if (btn) {
        const targetId = btn.getAttribute('data-target');
        this.openModal(targetId);
      }
    });

    // === IRS Inflation View Input Toggle Engine (Safe-Guarded) ===
    const irsInflationToggle = document.getElementById('applyIrsInflationToggle');
    const irsInflationGroup = document.getElementById('irsInflationDropdownGroup');
    if (irsInflationToggle && irsInflationGroup) {
      irsInflationToggle.addEventListener('change', () => {
        irsInflationGroup.style.display = irsInflationToggle.checked ? 'flex' : 'none';
      });
    }

    // 2. Global click delegation for close/cancel actions
    document.addEventListener('click', (e) => {
      if (e.target.closest('.close-x-btn, .cancel-btn')) {
        e.preventDefault();
        this.closeAllModals();
      }
    });

    // Withdrawal Method toggle layout engine tracker
    document.getElementById('withdrawalMethod')?.addEventListener('change', (e) => {
      const percentageWrapper = document.getElementById('percentageWrapper');
      const fixedAmountWrapper = document.getElementById('fixedAmountWrapper');
      if (e.target.value === 'percentage') {
        if (percentageWrapper) percentageWrapper.style.display = 'block';
        if (fixedAmountWrapper) fixedAmountWrapper.style.display = 'none';
      } else {
        if (percentageWrapper) percentageWrapper.style.display = 'none';
        if (fixedAmountWrapper) fixedAmountWrapper.style.display = 'flex';
      }
    });

    // State Profile interactive dynamic layout view updates
    document.getElementById('stateOfResidence')?.addEventListener('change', (e) => {
      this.state.taxProfile.stateOfResidence = e.target.value;
      this.renderStateTaxPanel();
    });

    // Backdrop click handler to close active popups
    if (this.dom.overlay) {
      this.dom.overlay.addEventListener('click', (e) => {
        if (e.target === this.dom.overlay) this.closeAllModals();
      });
    }

    // Global hotkey escape monitor sequence configuration
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.dom.overlay && this.dom.overlay.style.display === 'flex') {
        this.closeAllModals();
      }
    });

    // Custom Tax Bracket container field configurations
    if (this.dom.predictCustomBrackets && this.dom.customBracketsContainer) {
      this.dom.predictCustomBrackets.addEventListener('change', (e) => {
        this.dom.customBracketsContainer.style.display = e.target.checked ? 'block' : 'none';
      });
    }

    // Itemized Deduction layout structure rendering toggles
    if (this.dom.deductionType && this.dom.itemizedDeductionGroup) {
      this.dom.deductionType.addEventListener('change', (e) => {
        this.dom.itemizedDeductionGroup.style.display = e.target.value === 'itemized' ? 'block' : 'none';
      });
    }

    // Monitor retirement withdrawal tier boxes for order anomalies
    document.getElementById('wdAge2')?.addEventListener('input', () => this.validateWithdrawalAgeTiers());
    document.getElementById('wdAge3')?.addEventListener('input', () => this.validateWithdrawalAgeTiers());
  } // 💡 This bracket seals the method scope perfectly, allowing remaining code to run!

  registerFormSubmissions() { 
    const payRaiseToggle = document.getElementById('applyPayRaise'); 
    const compoundingGroup = document.getElementById('compoundingRaiseGroup'); 
    if (payRaiseToggle && compoundingGroup) { 
      payRaiseToggle.addEventListener('change', () => { 
        compoundingGroup.style.display = payRaiseToggle.checked ? 'flex' : 'none'; 
      }); 
    } 

    const strategySelect = document.getElementById('retirementStrategy'); 
    const ageGroup = document.getElementById('retirementAgeGroup'); 
    const dateGroup = document.getElementById('retirementDateGroup'); 
    if (strategySelect && ageGroup && dateGroup) { 
      strategySelect.addEventListener('change', () => { 
        ageGroup.style.display = strategySelect.value === 'By Age' ? 'flex' : 'none'; 
        dateGroup.style.display = strategySelect.value === 'By Date' ? 'flex' : 'none'; 
      }); 
    } 

    const mbcbpToggle = document.getElementById('enrolledMBCBP'); 
    const mbcbpGroup = document.getElementById('mbcbpInputsGroup'); 
    if (mbcbpToggle && mbcbpGroup) { 
      mbcbpToggle.addEventListener('change', () => { 
        mbcbpGroup.style.display = mbcbpToggle.checked ? 'flex' : 'none'; 
      }); 
    } 

    const varyHoursToggle = document.getElementById('varyHoursByAgeToggle'); 
    const variableHoursGroup = document.getElementById('variableHoursTableGroup'); 
    if (varyHoursToggle && variableHoursGroup) { 
      varyHoursToggle.addEventListener('change', () => { 
        variableHoursGroup.style.display = varyHoursToggle.checked ? 'flex' : 'none'; 
      }); 
    } 

    const seatChangeToggle = document.getElementById('planSeatChangesToggle'); 
    const aircraftGroup = document.getElementById('aircraftUpgradeGroup'); 
    if (seatChangeToggle && aircraftGroup) { 
      seatChangeToggle.addEventListener('change', () => { 
        aircraftGroup.style.display = seatChangeToggle.checked ? 'flex' : 'none'; 
      }); 
    } 

    const ssToggle = document.getElementById('incorporateSocialSecurity'); 
    const ssGroup = document.getElementById('socialSecurityInputsGroup'); 
    if (ssToggle && ssGroup) { 
      ssToggle.addEventListener('change', () => { 
        ssGroup.style.display = ssToggle.checked ? 'flex' : 'none'; 
      }); 
    } 

    const psStyleSelect = document.getElementById('profitSharingContributionStyle'); 
    const psDollarGroup = document.getElementById('psDollarInputsGroup'); 
    const psPercentGroup = document.getElementById('psPercentInputsGroup'); 
    if (psStyleSelect && psDollarGroup && psPercentGroup) { 
      psStyleSelect.addEventListener('change', () => { 
        const isAmount = psStyleSelect.value === 'amount'; 
        psDollarGroup.style.display = isAmount ? 'flex' : 'none'; 
        psPercentGroup.style.display = isAmount ? 'none' : 'flex'; 
      }); 
    } 

    if (this.dom.careerForm) this.dom.careerForm.addEventListener('submit', (e) => { e.preventDefault(); this.saveCareerData(); }); 
    if (this.dom.fortyOneKForm) this.dom.fortyOneKForm.addEventListener('submit', (e) => { e.preventDefault(); this.saveFortyOneKData(); }); 
    if (this.dom.tspForm) this.dom.tspForm.addEventListener('submit', (e) => { e.preventDefault(); this.saveTspData(); }); 
    
    const checkIraForm = document.getElementById('iraForm'); 
    if (checkIraForm) { checkIraForm.addEventListener('submit', (e) => { e.preventDefault(); this.saveIraData(); }); } 
    if (this.dom.retirementForm) { this.dom.retirementForm.addEventListener('submit', (e) => { e.preventDefault(); this.saveRetirementData(); }); } 
    if (this.dom.socialSecurityForm) { this.dom.socialSecurityForm.addEventListener('submit', (e) => { e.preventDefault(); this.saveSocialSecurityData(); }); } 
    
    const txForm = document.getElementById('taxProfileForm'); 
    if (txForm) { txForm.addEventListener('submit', (e) => { e.preventDefault(); this.saveTaxProfileData(); }); } 
    const penForm = document.getElementById('pensionForm'); 
    if (penForm) { penForm.addEventListener('submit', (e) => { e.preventDefault(); this.savePensionData(); }); } 

    const hsaStyleSelect = document.getElementById('hsaContributionStyle'); 
    const hsaPsGroup = document.getElementById('hsaProfitSharingInputsGroup'); 
    const hsaMonthlyGroup = document.getElementById('hsaMonthlyInputsGroup'); 
    if (hsaStyleSelect && hsaPsGroup && hsaMonthlyGroup) { 
      hsaStyleSelect.addEventListener('change', () => { 
        const isPS = hsaStyleSelect.value === 'profitsharing'; 
        hsaPsGroup.style.display = isPS ? 'flex' : 'none'; 
        hsaMonthlyGroup.style.display = isPS ? 'none' : 'flex'; 
        if (typeof window.validateHsaContributionLimits === 'function') window.validateHsaContributionLimits(); 
      }); 
    } 

    const syncHsaMaxToggles = () => { 
      const tier = document.getElementById('hsaCoverageTier')?.value || 'self'; 
      const baseLimit = (tier === 'family') ? 8750 : 4400; 
      const catchUpLimit = baseLimit + 1000; 
      const toggles = [ 
        { tId: 'maxHsaPsToggle', iId: 'profitSharContribHsa', val: baseLimit }, 
        { tId: 'maxHsaPsOver55Toggle', iId: 'profitSharContribHsaOver55', val: catchUpLimit }, 
        { tId: 'maxHsaMoToggle', iId: 'monthlyContribHsa', val: Math.floor((baseLimit / 12) * 100) / 100 }, 
        { tId: 'maxHsaMoOver55Toggle', iId: 'monthlyContribHsaOver55', val: Math.floor((catchUpLimit / 12) * 100) / 100 } 
      ]; 
      toggles.forEach(item => { 
        const toggleEl = document.getElementById(item.tId); 
        const inputEl = document.getElementById(item.iId); 
        if (toggleEl && inputEl) { 
          if (toggleEl.checked) { 
            inputEl.value = item.val; 
            inputEl.readOnly = true; 
            inputEl.style.opacity = '0.6'; 
            inputEl.style.background = 'rgba(255,255,255,0.05)'; 
          } else { 
            inputEl.readOnly = false; 
            inputEl.style.opacity = '1'; 
            inputEl.style.background = ''; 
          } 
        } 
      }); 
      if (typeof window.validateHsaContributionLimits === 'function') window.validateHsaContributionLimits(); 
    }; 

    const validateHsaContributionLimits = () => { 
      const style = document.getElementById('hsaContributionStyle')?.value || 'profitsharing'; 
      const tier = document.getElementById('hsaCoverageTier')?.value || 'self'; 
      const psUnder55 = parseFloat(document.getElementById('profitSharContribHsa')?.value || 0); 
      const psOver55 = parseFloat(document.getElementById('profitSharContribHsaOver55')?.value || 0); 
      const moUnder55 = parseFloat(document.getElementById('monthlyContribHsa')?.value || 0); 
      const moOver55 = parseFloat(document.getElementById('monthlyContribHsaOver55')?.value || 0); 
      const maxBase = (tier === 'family') ? 8750 : 4400; 
      const maxCatchUp = maxBase + 1000; 
      let isViolated = false; 
      let errorMessage = ""; 
      if (style === 'profitsharing') { 
        if (psUnder55 > maxBase) { isViolated = true; errorMessage = `Annual Profit Sharing under Age 55 exceeds maximum IRS ceiling of $${maxBase.toLocaleString()}.`; } 
        else if (psOver55 > maxCatchUp) { isViolated = true; errorMessage = `Annual Profit Sharing at Age 55+ Catch-up exceeds maximum IRS ceiling of $${maxCatchUp.toLocaleString()}.`; } 
      } else { 
        const annualMoUnder55 = moUnder55 * 12; 
        const annualMoOver55 = moOver55 * 12; 
        if (annualMoUnder55 > maxBase) { isViolated = true; errorMessage = `Monthly contributions project an annual total of $${annualMoUnder55.toLocaleString()}, exceeding the $${maxBase.toLocaleString()} limit.`; } 
        else if (annualMoOver55 > maxCatchUp) { isViolated = true; errorMessage = `Monthly catch-up contributions project an annual total of $${annualMoOver55.toLocaleString()}, exceeding the $${maxCatchUp.toLocaleString()} limit.`; } 
      } 
      const alertBox = document.getElementById('hsaLimitErrorAlert'); 
      const alertText = document.getElementById('hsaErrorAlertText'); 
      const hsaSubmitBtn = document.querySelector('#hsaForm .submit-btn'); 
      if (isViolated) { 
        if (alertBox && alertText) { alertText.textContent = errorMessage; alertBox.style.display = 'flex'; } 
        if (hsaSubmitBtn) hsaSubmitBtn.setAttribute('disabled', 'true'); 
      } else { 
        if (alertBox) alertBox.style.display = 'none'; 
        if (hsaSubmitBtn) hsaSubmitBtn.removeAttribute('disabled'); 
      } 
    };

    window.syncHsaMaxToggles = syncHsaMaxToggles;
    window.validateHsaContributionLimits = validateHsaContributionLimits;
    // === Expanded Spouse HSA Maximum Automation and Validation Engine === 
    const syncSpouseHsaMaxToggles = () => { 
      const tier = document.getElementById('spouseHsaCoverageTier')?.value || 'self'; 
      const baseLimit = (tier === 'family') ? 8750 : 4400; 
      const catchUpLimit = baseLimit + 1000; 
      const toggles = [ 
        { tId: 'maxSpouseHsaMoToggle', iId: 'spouseMonthlyContribHsa', val: Math.floor((baseLimit / 12) * 100) / 100 }, 
        { tId: 'maxSpouseHsaMoOver55Toggle', iId: 'spouseMonthlyContribHsaOver55', val: Math.floor((catchUpLimit / 12) * 100) / 100 } 
      ]; 
      toggles.forEach(item => { 
        const toggleEl = document.getElementById(item.tId); 
        const inputEl = document.getElementById(item.iId); 
        if (toggleEl && inputEl) { 
          if (toggleEl.checked) { 
            inputEl.value = item.val; 
            inputEl.readOnly = true; 
            inputEl.style.opacity = '0.6'; 
            inputEl.style.background = 'rgba(255,255,255,0.05)'; 
          } else { 
            inputEl.readOnly = false; 
            inputEl.style.opacity = '1'; 
            inputEl.style.background = ''; 
          } 
        } 
      }); 
      validateSpouseHsaLimits(); 
    }; 

    const validateSpouseHsaLimits = () => { 
      const tier = document.getElementById('spouseHsaCoverageTier')?.value || 'self'; 
      const moUnder55 = parseFloat(document.getElementById('spouseMonthlyContribHsa')?.value || 0); 
      const moOver55 = parseFloat(document.getElementById('spouseMonthlyContribHsaOver55')?.value || 0); 
      const annualUnder55 = moUnder55 * 12; 
      const annualOver55 = moOver55 * 12; 
      const maxBase = (tier === 'family') ? 8750 : 4400; 
      const maxCatchUp = maxBase + 1000; 
      let isViolated = false; 
      let errorMessage = ""; 
      if (annualUnder55 > maxBase) { 
        isViolated = true; 
        errorMessage = `Spouse monthly contribution ($${moUnder55}/mo) projects an annual total of $${annualUnder55.toLocaleString()}, exceeding the $${maxBase.toLocaleString()} limit.`; 
      } else if (annualOver55 > maxCatchUp) { 
        isViolated = true; 
        errorMessage = `Spouse monthly catch-up contribution ($${moOver55}/mo) projects an annual total of $${annualOver55.toLocaleString()}, exceeding the $${maxCatchUp.toLocaleString()} limit.`; 
      } 
      const alertBox = document.getElementById('spouseHsaLimitErrorAlert'); 
      const alertText = document.getElementById('spouseHsaErrorAlertText'); 
      const spouseSubmitBtn = document.querySelector('#spouseAccountsForm .submit-btn') || document.querySelector('#spouseAccountsForm button[type="submit"]'); 
      if (isViolated) { 
        if (alertBox && alertText) { alertText.textContent = errorMessage; alertBox.style.display = 'flex'; } 
        if (spouseSubmitBtn) spouseSubmitBtn.setAttribute('disabled', 'true'); 
      } else { 
        if (alertBox) alertBox.style.display = 'none'; 
        if (spouseSubmitBtn) spouseSubmitBtn.removeAttribute('disabled'); 
      } 
    }; 

    ['maxHsaPsToggle', 'maxHsaPsOver55Toggle', 'maxHsaMoToggle', 'maxHsaMoOver55Toggle'].forEach(id => { 
      document.getElementById(id)?.addEventListener('change', (e) => { 
        const inputId = id === 'maxHsaPsToggle' ? 'profitSharContribHsa' : id === 'maxHsaPsOver55Toggle' ? 'profitSharContribHsaOver55' : id === 'maxHsaMoToggle' ? 'monthlyContribHsa' : 'monthlyContribHsaOver55'; 
        const inputEl = document.getElementById(inputId); 
        if (!e.target.checked && inputEl) inputEl.value = "0"; 
        syncHsaMaxToggles(); 
      }); 
    }); 

    document.querySelectorAll('.hsa-calc-input').forEach(input => { input.addEventListener('input', validateHsaContributionLimits); }); 
    document.getElementById('hsaCoverageTier')?.addEventListener('change', () => { syncHsaMaxToggles(); validateHsaContributionLimits(); }); 

    ['maxSpouseHsaMoToggle', 'maxSpouseHsaMoOver55Toggle'].forEach(id => { 
      document.getElementById(id)?.addEventListener('change', (e) => { 
        const inputId = id === 'maxSpouseHsaMoToggle' ? 'spouseMonthlyContribHsa' : 'spouseMonthlyContribHsaOver55'; 
        const inputEl = document.getElementById(inputId); 
        if (!e.target.checked && inputEl) inputEl.value = "0"; 
        syncSpouseHsaMaxToggles(); 
      }); 
    }); 

    document.querySelectorAll('.spouse-hsa-calc-input').forEach(input => { input.addEventListener('input', validateSpouseHsaLimits); }); 
    document.getElementById('spouseHsaCoverageTier')?.addEventListener('change', () => { syncSpouseHsaMaxToggles(); validateSpouseHsaLimits(); }); 

    window.syncSpouseHsaMaxToggles = syncSpouseHsaMaxToggles; 
    window.validateSpouseHsaLimits = validateSpouseHsaLimits; 

    // === Spouse Roth IRA Automatic Maximum Toggle Switch Engine === 
    const syncSpouseIraMaxToggles = () => { 
      const toggles = [ 
        { tId: 'maxSpouseIraUnder50Toggle', iId: 'spouseIraAnnualUnder50', val: 7500 }, 
        { tId: 'maxSpouseIraOver50Toggle', iId: 'spouseIraAnnualOver50', val: 8600 } 
      ]; 
      toggles.forEach(item => { 
        const toggleEl = document.getElementById(item.tId); 
        const inputEl = document.getElementById(item.iId); 
        if (toggleEl && inputEl) { 
          if (toggleEl.checked) { 
            inputEl.value = item.val; 
            inputEl.readOnly = true; 
            inputEl.style.opacity = '0.6'; 
            inputEl.style.background = 'rgba(255,255,255,0.05)'; 
          } else { 
            inputEl.readOnly = false; 
            inputEl.style.opacity = '1'; 
            inputEl.style.background = ''; 
          } 
        } 
      }); 
      validateSpouseIraLimits(); 
    }; 

    const validateSpouseIraLimits = () => { 
      const under50Val = parseFloat(document.getElementById('spouseIraAnnualUnder50')?.value || 0); 
      const over50Val = parseFloat(document.getElementById('spouseIraAnnualOver50')?.value || 0); 
      let isViolated = false; 
      let errorMessage = ""; 
      if (under50Val > 7500) { 
        isViolated = true; 
        errorMessage = `Spouse Annual Contribution under Age 50 exceeds the maximum statutory 2026 IRS ceiling of $7,500.`; 
      } else if (over50Val > 8600) { 
        isViolated = true; 
        errorMessage = `Spouse Annual Catch-up Contribution for Age 50+ exceeds the maximum statutory 2026 IRS ceiling of $8,600.`; 
      } 
      const alertBox = document.getElementById('spouseIraLimitErrorAlert'); 
      const alertText = document.getElementById('spouseIraErrorAlertText'); 
      const spouseSubmitBtn = document.querySelector('#spouseAccountsForm .submit-btn'); 
      if (isViolated) { 
        if (alertBox && alertText) { alertText.textContent = errorMessage; alertBox.style.display = 'flex'; } 
        if (spouseSubmitBtn) spouseSubmitBtn.setAttribute('disabled', 'true'); 
      } else { 
        if (alertBox) alertBox.style.display = 'none'; 
        if (spouseSubmitBtn) spouseSubmitBtn.removeAttribute('disabled'); 
      } 
    }; 

    ['maxSpouseIraUnder50Toggle', 'maxSpouseIraOver50Toggle'].forEach(id => { 
      document.getElementById(id)?.addEventListener('change', (e) => { 
        const inputId = id === 'maxSpouseIraUnder50Toggle' ? 'spouseIraAnnualUnder50' : 'spouseIraAnnualOver50'; 
        const inputEl = document.getElementById(inputId); 
        if (!e.target.checked && inputEl) inputEl.value = "0"; 
        syncSpouseIraMaxToggles(); 
      }); 
    }); 

    document.querySelectorAll('.spouse-ira-calc-input').forEach(input => { input.addEventListener('input', validateSpouseIraLimits); }); 
    window.syncSpouseIraMaxToggles = syncSpouseIraMaxToggles; 
    window.validateSpouseIraLimits = validateSpouseIraLimits; 

   // --- DOUBLE-WRAPPER & SINGLE-LAYER SUBMISSION MATRIX ---
const doubleWrapperProfiles = [
  { parentId: 'careerForm', action: () => this.saveCareerData() },
  { parentId: 'fortyOneKForm', action: () => this.saveFortyOneKData() },
  { parentId: 'tspForm', action: () => this.saveTspData() },
  { parentId: 'iraForm', action: () => this.saveIraData() },
  { parentId: 'hsaForm', action: () => this.saveNewAccountData() },
  { parentId: 'brokerageForm', action: () => this.saveNewAccountData() },
  { parentId: 'spouseAccountsForm', action: () => this.saveNewAccountData() },
  { parentId: 'supplementalIncomeModal', action: () => this.saveSupplementalIncomeData() }
];

doubleWrapperProfiles.forEach(item => {
  const parentWindow = document.getElementById(item.parentId);
  if (parentWindow) {
    const actualForm = parentWindow.tagName === 'FORM' ? parentWindow : parentWindow.querySelector('form');
    // Safe-guard condition handles empty placeholder windows flawlessly
    if (actualForm) {
      actualForm.addEventListener('submit', (e) => {
        e.preventDefault();
        item.action();
      });
    } else {
      console.warn(`Safe-Guard: Missing structural form element inside container: "${item.parentId}"`);
    }
  }
});
}


  saveCareerData() { 
    const getVal = (id) => document.getElementById(id) ? document.getElementById(id).value : ''; 
    this.state.career = { 
      birthDate: getVal('birthDate'), 
      hireDate: getVal('hireDate'), 
      hoursPerMonth: getVal('hoursPerMonth'), 
      aircraftSeat: getVal('aircraftSeat'), 
      retirementStrategy: getVal('retirementStrategy'), 
      retirementAge: getVal('retirementAge'), 
      retirementCustomDate: getVal('retirementCustomDate'), 
      secondSeat: getVal('secondSeat'), 
      conversionDate2: getVal('conversionDate2'), 
      thirdSeat: getVal('thirdSeat'), 
      conversionDate3: getVal('conversionDate3'), 
      fourthSeat: getVal('fourthSeat'), 
      conversionDate4: getVal('conversionDate4'), 
      applyPayRaise: document.getElementById('applyPayRaise')?.checked || false, 
      compoundingRaisePercent: getVal('compoundingRaisePercent'), 
      contractStartDate: getVal('contractStartDate'), 
      planSeatChanges: document.getElementById('planSeatChangesToggle')?.checked || false, 
      varyHoursByAge: document.getElementById('varyHoursByAgeToggle')?.checked || false, 
      varHoursAge1: getVal('varHoursAge1'), 
      varHoursAmt1: getVal('varHoursAmt1'), 
      varHoursAge2: getVal('varHoursAge2'), 
      varHoursAmt2: getVal('varHoursAmt2'), 
      varHoursAge3: getVal('varHoursAge3'), 
      varHoursAmt3: getVal('varHoursAmt3') 
    }; 
        // Save IRS inflation switch states safely into the persistent storage engine
    
    localStorage.setItem('pilot_career_profile', JSON.stringify(this.state.career)); 
    this.syncGlobalState(); 
    this.closeAllModals(); 
    this.generateProjections(); 
  } 

  saveFortyOneKData() { 
    const getVal = (id) => document.getElementById(id) ? document.getElementById(id).value : ''; 
    this.state.fortyOneK = { 
      growthRate: getVal('growthRate401k'), 
      companyDirect: getVal('companyDirect401k'), 
      personalTradPercent: getVal('personalTradPercent401k'), 
      personalRothPercent: getVal('personalRothPercent401k'), 
      currentTradBalance: getVal('currentTradBalance401k'), 
      currentRothBalance: getVal('currentRothBalance401k'), 
      enrolledMBCBP: document.getElementById('enrolledMBCBP')?.checked || false, 
      currentMBCBPBalance: getVal('currentMBCBPBalance') || '0', 
      growthRateMBCBP: getVal('growthRateMBCBP') || '0', 
      profitSharingStyle: getVal('profitSharingContributionStyle') || 'amount', 
      foTradProfitSharing: getVal('foTradProfitSharing') || '0', 
      foRothProfitSharing: getVal('foRothProfitSharing') || '0', 
      captTradProfitSharing: getVal('captTradProfitSharing') || '0', 
      captRothProfitSharing: getVal('captRothProfitSharing') || '0', 
      foTradProfitSharingPct: getVal('foTradProfitSharingPct') || '0', 
      foRothProfitSharingPct: getVal('foRothProfitSharingPct') || '0', 
      captTradProfitSharingPct: getVal('captTradProfitSharingPct') || '0', 
      captRothProfitSharingPct: getVal('captRothProfitSharingPct') || '0', 
      month401aFirst: getVal('month401aFirst'), 
      amount401aFirst: getVal('amount401aFirst') || '0', 
      month401aSecond: getVal('month401aSecond'), 
      amount401aSecond: getVal('amount401aSecond') || '0' 
    }; 
    // Paste this inside saveFortyOneKData() in Part 4:
this.state.irsInflation = {
  applyInflation: document.getElementById('applyIrsInflationToggle')?.checked || false,
  estimatedIncreaseRate: document.getElementById('estimatedIrsIncreaseRate')?.value || '2'
};
localStorage.setItem('pilot_irs_inflation_profile', JSON.stringify(this.state.irsInflation));
    localStorage.setItem('pilot_401k_profile', JSON.stringify(this.state.fortyOneK)); 
    this.syncGlobalState(); 
    this.closeAllModals(); 
    this.generateProjections(); 
  } 

  saveTspData() { 
    const getVal = (id) => document.getElementById(id) ? document.getElementById(id).value : ''; 
    this.state.tsp = { 
      growthRate: getVal('growthRateTsp'), 
      currentTradBalance: getVal('currentTradBalanceTsp'), 
      currentRothBalance: getVal('currentRothBalanceTsp'), 
      annualTradContrib: getVal('annualTradContribTsp'), 
      annualRothContrib: getVal('annualRothContribTsp'), 
      stopDate: getVal('stopDateTsp') 
    }; 
    localStorage.setItem('pilot_tsp_profile', JSON.stringify(this.state.tsp)); 
    this.closeAllModals(); 
    this.generateProjections(); 
  } 

  saveNewAccountData() { 
    const getVal = (id) => document.getElementById(id) ? document.getElementById(id).value : ''; 
    if (document.getElementById('hsaForm')) { 
      this.state.hsa = { 
        growthRate: getVal('growthRateHsa'), 
        coverageTier: getVal('hsaCoverageTier'), 
        currentBalance: getVal('currentBalanceHsa'), 
        annualExpenses: getVal('annualMedicalExpensesHsa'), 
        contributionStyle: getVal('hsaContributionStyle') || 'profitsharing', 
        maxHsaPs: document.getElementById('maxHsaPsToggle')?.checked || false, 
        maxHsaPsOver55: document.getElementById('maxHsaPsOver55Toggle')?.checked || false, 
        maxHsaMo: document.getElementById('maxHsaMoToggle')?.checked || false, 
        maxHsaMoOver55: document.getElementById('maxHsaMoOver55Toggle')?.checked || false, 
        profitSharContrib: getVal('profitSharContribHsa'), 
        profitSharContribOver55: getVal('profitSharContribHsaOver55') || '0', 
        monthlyContrib: getVal('monthlyContribHsa'), 
        monthlyContribOver55: getVal('monthlyContribHsaOver55'), 
        stopMonthlyDate: getVal('stopMonthlyDateHsa'), 
        stopAnnualDate: getVal('stopAnnualDateHsa') 
      }; 
      localStorage.setItem('pilot_hsa_profile', JSON.stringify(this.state.hsa)); 
    } 
    if (document.getElementById('iraForm')) { 
      this.state.tradIra = { 
        growthRate: getVal('tradIraGrowthRate'), 
        currentTradBalance: getVal('currentTradIra') 
      }; 
      localStorage.setItem('pilot_tradira_profile', JSON.stringify(this.state.tradIra)); 
    } 
    if (document.getElementById('brokerageForm')) { 
      this.state.brokerage = { 
        growthRate: getVal('growthRateBrokerage'), 
        currentBalance: getVal('currentBalanceBrokerage'), 
        monthlyContrib: getVal('monthlyContribBrokerage') 
      }; 
      localStorage.setItem('pilot_brokerage_profile', JSON.stringify(this.state.brokerage)); 
    } 
    if (document.getElementById('spouseAccountsForm')) { 
      this.state.spouse = { 
        iraGrowthRate: getVal('spouseIraGrowthRate'), 
        currentRothBalance: getVal('spouseCurrentRothIra'), 
        annualUnder50: getVal('spouseIraAnnualUnder50'), 
        annualOver50: getVal('spouseIraAnnualOver50'), 
        tradGrowthRate: getVal('spouseTradIraGrowthRate'), 
        currentTradBalance: getVal('spouseCurrentTradIra'), 
        birthDate: getVal('spouseBirthDate'), 
        hsaCoverageTier: getVal('spouseHsaCoverageTier') || 'self', 
        hsaGrowthRate: getVal('spouseGrowthRateHsa'), 
        hsaCurrentBalance: getVal('spouseCurrentBalanceHsa'), 
        maxSpouseHsaMo: document.getElementById('maxSpouseHsaMoToggle')?.checked || false, 
        maxSpouseHsaMoOver55: document.getElementById('maxSpouseHsaMoOver55Toggle')?.checked || false, 
        hsaMonthlyContrib: getVal('spouseMonthlyContribHsa'), 
        hsaMonthlyContribOver55: getVal('spouseMonthlyContribHsaOver55') || '0', 
        maxSpouseIraUnder50: document.getElementById('maxSpouseIraUnder50Toggle')?.checked || false, 
        maxSpouseIraOver50: document.getElementById('maxSpouseIraOver50Toggle')?.checked || false 
      }; 
      localStorage.setItem('pilot_spouse_profile', JSON.stringify(this.state.spouse)); 
    } 
    this.closeAllModals(); 
    this.generateProjections(); 
  }
  saveIraData() { 
    const getVal = (id, fallback = '') => document.getElementById(id) ? document.getElementById(id).value : fallback; 
    this.state.ira = { 
      iraGrowthRate: getVal('iraGrowthRate', '4'), 
      currentRothIra: getVal('currentRothIra', '0'), 
      iraOnlyCaptain: document.getElementById('iraOnlyCaptain')?.checked || false, 
      iraAnnualUnder50: getVal('iraAnnualUnder50', '0'), 
      iraAnnualOver50: getVal('iraAnnualOver50', '0'), 
      spouseCurrentRothIra: getVal('spouseCurrentRothIra', '0'), 
      spouseIraAnnualUnder50: getVal('spouseIraAnnualUnder50', '0'), 
      spouseIraAnnualOver50: getVal('spouseIraAnnualOver50', '0'), 
      spouseBirthDate: getVal('spouseBirthDate', '') 
    }; 
    localStorage.setItem('pilot_ira_profile', JSON.stringify(this.state.ira)); 
    
    this.state.tradIra = { 
      growthRate: getVal('tradIraGrowthRate', '4'), 
      currentTradBalance: getVal('currentTradIra', '0') 
    }; 
    localStorage.setItem('pilot_tradira_profile', JSON.stringify(this.state.tradIra)); 
    
    this.syncGlobalState(); 
    this.closeAllModals(); 
    this.generateProjections(); 
  } 

  saveRetirementData() { 
    const getVal = (id) => document.getElementById(id) ? document.getElementById(id).value : ''; 
    this.state.retirementStrategy = { 
      additionalTrad: parseFloat(getVal('additionalTradRetirementBalances')) || 0, 
      additionalRoth: parseFloat(getVal('additionalRothRetirementBalances')) || 0, 
      tradGrowth: parseFloat(getVal('growthRateTraditionalIraRetirement')) || 4, 
      rothGrowth: parseFloat(getVal('growthRateRothIraRetirement')) || 4, 
      strategy: getVal('withdrawalStrategy'), 
      withdrawalPercent: parseFloat(getVal('percentWithdrawalFromRetirement')) || 4, 
      withdrawalOption: document.getElementById('withdrawalOption')?.value || 'Option A', 
      withdrawalMethod: getVal('withdrawalMethod') || 'percentage', 
      withdrawalFixedAmount: parseFloat(getVal('fixedWithdrawalAmount')) || 0, 
      wdAge1: getVal('wdAge1'), 
      wdAmt1: getVal('wdAmt1') || '0', 
      wdAge2: getVal('wdAge2'), 
      wdAmt2: getVal('wdAmt2') || '0', 
      wdAge3: getVal('wdAge3'), 
      wdAmt3: getVal('wdAmt3') || '0', 
      withdrawalStartStrategy: getVal('withdrawalStartStrategy') || 'immediate', 
      withdrawalStartDate: getVal('withdrawalStartDate') || '' 
    }; 
    localStorage.setItem('pilot_retirement_profile', JSON.stringify(this.state.retirementStrategy)); 
    this.closeAllModals(); 
    this.generateProjections(); 
  } 

  validateWithdrawalAgeTiers() { 
    const age1 = parseFloat(document.getElementById('wdAge1')?.value) || 0; 
    const age2El = document.getElementById('wdAge2'); 
    const age3El = document.getElementById('wdAge3'); 
    const submitBtn = document.querySelector('#retirementForm .submit-btn'); 
    const alertBox = document.getElementById('tierLimitErrorAlert'); 
    const alertText = document.getElementById('tierErrorAlertText'); 
    const age2 = parseFloat(age2El?.value || 0); 
    const age3 = parseFloat(age3El?.value || 0); 
    let isViolated = false; 
    let errorMessage = ""; 
    
    if (age2El) age2El.style.borderColor = ""; 
    if (age3El) age3El.style.borderColor = ""; 
    
    if (age2El && age2El.value !== "" && age2 <= age1) { 
      isViolated = true; 
      if (age2El) age2El.style.borderColor = "#ef4444"; 
      errorMessage = `Tier 2 age (${age2}) must be older than your starting retirement age (${age1}).`; 
    } else if (age3El && age3El.value !== "" && age2El && age2El.value !== "" && age3 <= age2) { 
      isViolated = true; 
      if (age3El) age3El.style.borderColor = "#ef4444"; 
      errorMessage = `Tier 3 age (${age3}) must be older than your Tier 2 age (${age2}).`; 
    } else if (age3El && age3El.value !== "" && age3 <= age1) { 
      isViolated = true; 
      if (age3El) age3El.style.borderColor = "#ef4444"; 
      errorMessage = `Tier 3 age (${age3}) must be older than your starting retirement age (${age1}).`; 
    } 
    
    if (isViolated) { 
      if (alertBox && alertText) { alertText.textContent = errorMessage; alertBox.style.display = 'flex'; } 
      if (submitBtn) submitBtn.setAttribute('disabled', 'true'); 
    } else { 
      if (alertBox) alertBox.style.display = 'none'; 
      if (submitBtn) submitBtn.removeAttribute('disabled'); 
    } 
  } 

  saveSocialSecurityData() { 
    this.state.socialSecurity = { 
      incorporate: document.getElementById('incorporateSocialSecurity')?.checked || false, 
      claimAge: parseInt(document.getElementById('socialSecurityAge')?.value) || 65, 
      manualBenefitEstimate: parseFloat(document.getElementById('manualBenefitEstimate')?.value) || 0 
    }; 
    localStorage.setItem('pilot_ss_profile', JSON.stringify(this.state.socialSecurity)); 
    this.closeAllModals(); 
    this.generateProjections(); 
  } 

  saveTaxProfileData() { 
    const getVal = (id) => document.getElementById(id) ? document.getElementById(id).value : ''; 
    const getCheck = (id) => document.getElementById(id) ? document.getElementById(id).checked : false; 
    this.state.taxProfile.filingStatus = getVal('taxFilingStatus') || 'single'; 
    this.state.taxProfile.stateOfResidence = getVal('stateOfResidence') || 'ID'; 
    this.state.taxProfile.deductionMethod = getVal('deductionType') || 'standard'; 
    this.state.taxProfile.manualItemizedAmount = parseFloat(getVal('manualItemizedAmount')) || 0; 
    this.state.taxProfile.predictCustomBrackets = getCheck('predictCustomBrackets'); 
    
    const rates = document.querySelectorAll('.custom-bracket-rate'); 
    const limits = document.querySelectorAll('.custom-bracket-limit'); 
    let customBrackets = []; 
    rates.forEach((rateEl, idx) => { 
      let rateVal = parseFloat(rateEl.value) || 0; 
      let limitVal = limits[idx] ? parseFloat(limits[idx].value) : Infinity; 
      if (isNaN(limitVal)) limitVal = Infinity; 
      customBrackets.push({ rate: rateVal, limit: limitVal }); 
    }); 
    this.state.taxProfile.brackets = customBrackets; 
    localStorage.setItem('pilot_tax_profile', JSON.stringify(this.state.taxProfile)); 
    this.syncGlobalState(); 
    this.renderStateTaxPanel(); 
    this.closeAllModals(); 
    this.generateProjections(); 
  } 

  savePensionData() { 
    const getVal = (id) => document.getElementById(id) ? document.getElementById(id).value : ''; 
    this.state.pension = { 
      monthlyAmount: parseFloat(getVal('pensionMonthlyAmount')) || 0, 
      startDate: getVal('pensionStartDate') || '' 
    }; 
    localStorage.setItem('pilot_pension_profile', JSON.stringify(this.state.pension)); 
    this.closeAllModals(); 
    this.generateProjections(); 
  } 

  saveSupplementalIncomeData() { 
    const getVal = (id) => document.getElementById(id) ? document.getElementById(id).value : ''; 
    this.state.supplementalIncome = { 
      monthlyAmount: parseFloat(getVal('suppMonthlyAmount')) || 0, 
      isTaxable: document.getElementById('suppIsTaxable')?.checked || false, 
      monthlyAmount2: parseFloat(getVal('suppMonthlyAmount2')) || 0, 
      isTaxable2: document.getElementById('suppIsTaxable2')?.checked || false 
    }; 
    localStorage.setItem('pilot_supplemental_income_profile', JSON.stringify(this.state.supplementalIncome)); 
    this.closeAllModals(); 
    this.generateProjections(); 
  } 

  loadSavedState() { 
    const loadKey = (key, stateTarget) => { 
      const data = localStorage.getItem(key); 
      if (data) this.state[stateTarget] = JSON.parse(data); 
    }; 
    loadKey('pilot_career_profile', 'career'); 
    loadKey('pilot_401k_profile', 'fortyOneK'); 
    loadKey('pilot_tsp_profile', 'tsp'); 
    loadKey('pilot_ira_profile', 'ira'); 
    loadKey('pilot_retirement_profile', 'retirementStrategy'); 
    loadKey('pilot_ss_profile', 'socialSecurity'); 
    loadKey('pilot_tax_profile', 'taxProfile'); 
    loadKey('pilot_pension_profile', 'pension'); 
    loadKey('pilot_hsa_profile', 'hsa'); 
    loadKey('pilot_brokerage_profile', 'brokerage'); 
    loadKey('pilot_spouse_profile', 'spouse'); 
    loadKey('pilot_supplemental_income_profile', 'supplementalIncome'); 
        // Restore the user's IRS inflation profile from storage memory
    const inflationData = localStorage.getItem('pilot_irs_inflation_profile');
    if (inflationData) {
      this.state.irsInflation = JSON.parse(inflationData);
    }
    this.syncGlobalState(); 
    this.hydrateAllFormInputs(); 
    this.renderStateTaxPanel(); 
    this.generateProjections(); 
  }
  hydrateAllFormInputs() { 
    const c = this.state.career; 
    const f = this.state.fortyOneK; 
    const i = this.state.ira; 
    const r = this.state.retirementStrategy; 
    const s = this.state.socialSecurity; 

    // Safe string serializer ensures that zero-states do not create blank fallback drops
    const setVal = (id, val) => { 
      const el = document.getElementById(id); 
      if (el && val !== undefined && val !== null) { 
        if (val === 0 || val === "0" || val === "") { 
          el.value = ""; 
        } else { 
          el.value = String(val); 
        } 
      } 
    }; 

    const setCheck = (id, isChecked) => { 
      const el = document.getElementById(id); 
      if (el) el.checked = !!isChecked; 
    }; 

    // Hydrate Form: Career Profile Inputs 
    setVal('birthDate', c.birthDate || "1979-01-01"); 
    setVal('hireDate', c.hireDate || "2017-01-01"); 
    setVal('retirementStrategy', c.retirementStrategy || "By Age"); 
    setVal('retirementAge', c.retirementAge || "65"); 
    setVal('retirementCustomDate', c.retirementCustomDate || ""); 
    setVal('hoursPerMonth', c.hoursPerMonth || "72"); 
    setVal('aircraftSeat', c.aircraftSeat || "320B"); 
    setVal('secondSeat', c.secondSeat || ""); 
    setVal('conversionDate2', c.conversionDate2 || ""); 
    setVal('thirdSeat', c.thirdSeat || "320B"); 
    setVal('conversionDate3', c.conversionDate3 || ""); 
    setVal('fourthSeat', c.fourthSeat || "320B"); 
    setVal('conversionDate4', c.conversionDate4 || ""); 
    setCheck('applyPayRaise', c.applyPayRaise); 
    setVal('contractStartDate', c.contractStartDate || ""); 
    setVal('compoundingRaisePercent', c.compoundingRaisePercent || ""); 

    if (document.getElementById('varyHoursByAgeToggle')) { 
      document.getElementById('varyHoursByAgeToggle').checked = !!c.varyHoursByAge; 
    } 
    if (document.getElementById('planSeatChangesToggle')) { 
      document.getElementById('planSeatChangesToggle').checked = !!c.planSeatChanges; 
    } 

    const aircraftGroupWrap = document.getElementById('aircraftUpgradeGroup'); 
    if (aircraftGroupWrap) { 
      aircraftGroupWrap.style.display = c.planSeatChanges ? 'flex' : 'none'; 
    } 

    const varHoursGroupElement = document.getElementById('variableHoursTableGroup'); 
    if (varHoursGroupElement) { 
      varHoursGroupElement.style.display = c.varyHoursByAge ? 'flex' : 'none'; 
    } 

    setVal('varHoursAge1', c.varHoursAge1 || ""); 
    setVal('varHoursAmt1', c.varHoursAmt1 || "72"); 
    setVal('varHoursAge2', c.varHoursAge2 || ""); 
    setVal('varHoursAmt2', c.varHoursAmt2 || "72"); 
    setVal('varHoursAge3', c.varHoursAge3 || ""); 
    setVal('varHoursAmt3', c.varHoursAmt3 || "72");
      // Hydrate Form View Layout: IRS Contribution Inflation State Elements
  const inf = this.state.irsInflation || { applyInflation: false, estimatedIncreaseRate: '2' };
  setCheck('applyIrsInflationToggle', inf.applyInflation);
  setVal('estimatedIrsIncreaseRate', inf.estimatedIncreaseRate);
  if (document.getElementById('irsInflationDropdownGroup')) {
    document.getElementById('irsInflationDropdownGroup').style.display = inf.applyInflation ? 'flex' : 'none';
  }
    // === 401K & BACKDOOR MOUNT HYDRATION SYSTEM === 
    const activePsStyle = f.profitSharingStyle || "amount"; 
    setVal('profitSharingContributionStyle', activePsStyle); 

    // Dynamic 401k Profit Sharing Group Panel View Toggles 
    if (document.getElementById('psDollarInputsGroup') && document.getElementById('psPercentInputsGroup')) { 
      document.getElementById('psDollarInputsGroup').style.display = (activePsStyle === 'amount') ? 'flex' : 'none'; 
      document.getElementById('psPercentInputsGroup').style.display = (activePsStyle === 'percentage') ? 'flex' : 'none'; 
    } 

    setVal('growthRate401k', f.growthRate !== undefined ? String(f.growthRate) : "4"); 
    setVal('companyDirect401k', f.companyDirect !== undefined ? String(f.companyDirect) : "18"); 
    setVal('personalTradPercent401k', f.personalTradPercent !== undefined ? String(f.personalTradPercent) : "4"); 
    setVal('personalRothPercent401k', f.personalRothPercent !== undefined ? String(f.personalRothPercent) : "4"); 
    setVal('currentTradBalance401k', f.currentTradBalance !== undefined ? String(f.currentTradBalance) : "0"); 
    setVal('currentRothBalance401k', f.currentRothBalance !== undefined ? String(f.currentRothBalance) : "0"); 
    setCheck('enrolledMBCBP', f.enrolledMBCBP); 
    setVal('currentMBCBPBalance', f.currentMBCBPBalance !== undefined ? String(f.currentMBCBPBalance) : "0"); 
    setVal('growthRateMBCBP', f.growthRateMBCBP !== undefined ? String(f.growthRateMBCBP) : "4"); 

    // Hydrate Dollar Balances 
    setVal('foTradProfitSharing', f.foTradProfitSharing !== undefined ? String(f.foTradProfitSharing) : "0"); 
    setVal('foRothProfitSharing', f.foRothProfitSharing !== undefined ? String(f.foRothProfitSharing) : "0"); 
    setVal('captTradProfitSharing', f.captTradProfitSharing !== undefined ? String(f.captTradProfitSharing) : "0"); 
    setVal('captRothProfitSharing', f.captRothProfitSharing !== undefined ? String(f.captRothProfitSharing) : "0"); 

    // Hydrate Percentage Scales 
    setVal('foTradProfitSharingPct', f.foTradProfitSharingPct !== undefined ? String(f.foTradProfitSharingPct) : "0"); 
    setVal('foRothProfitSharingPct', f.foRothProfitSharingPct !== undefined ? String(f.foRothProfitSharingPct) : "0"); 
    setVal('captTradProfitSharingPct', f.captTradProfitSharingPct !== undefined ? String(f.captTradProfitSharingPct) : "0"); 
    setVal('captRothProfitSharingPct', f.captRothProfitSharingPct !== undefined ? String(f.captRothProfitSharingPct) : "0"); 

    setVal('month401aFirst', f.month401aFirst !== undefined && f.month401aFirst !== null ? String(f.month401aFirst) : ""); 
    setVal('amount401aFirst', f.amount401aFirst !== undefined ? String(f.amount401aFirst) : "0"); 
    setVal('month401aSecond', f.month401aSecond !== undefined && f.month401aSecond !== null ? String(f.month401aSecond) : ""); 
    setVal('amount401aSecond', f.amount401aSecond !== undefined ? String(f.amount401aSecond) : "0"); 

    // Hydrate Thrift Savings Plan (TSP) Data Inputs 
    setVal('growthRateTsp', this.state.tsp?.growthRate || "4"); 
    setVal('currentTradBalanceTsp', this.state.tsp?.currentTradBalance || "0"); 
    setVal('currentRothBalanceTsp', this.state.tsp?.currentRothBalance || "0"); 
    setVal('annualTradContribTsp', this.state.tsp?.annualTradContrib || "0"); 
    setVal('annualRothContribTsp', this.state.tsp?.annualRothContrib || "0"); 
    setVal('stopDateTsp', this.state.tsp?.stopDate || ""); 

    // Hydrate Personal & Spouse IRA Profile Inputs 
    setVal('iraGrowthRate', i.iraGrowthRate || "4"); 
    setVal('currentRothIra', i.currentRothIra || "0"); 
    setVal('iraAnnualUnder50', i.iraAnnualUnder50 || "0"); 
    setVal('iraAnnualOver50', i.iraAnnualOver50 || "0"); 
    setVal('spouseCurrentRothIra', i.spouseCurrentRothIra || "0"); 
    setVal('spouseIraAnnualUnder50', i.spouseIraAnnualUnder50 || "0"); 
    setVal('spouseIraAnnualOver50', i.spouseIraAnnualOver50 || "0");
    // Hydrate: Retirement / Social Security Inputs 
    setVal('additionalTradRetirementBalances', r.additionalTrad || "0"); 
    setVal('additionalRothRetirementBalances', r.additionalRoth || "0"); 
    setVal('growthRateTraditionalIraRetirement', r.tradGrowth || "4"); 
    setVal('growthRateRothIraRetirement', r.rothGrowth || "4"); 
    setVal('withdrawalStrategy', r.strategy || "Traditional First"); 
    setVal('percentWithdrawalFromRetirement', r.withdrawalPercent || "4"); 
    setVal('withdrawalOption', r.withdrawalOption || "Option A"); 
    setVal('withdrawalMethod', r.withdrawalMethod || "percentage"); 
    setVal('fixedWithdrawalAmount', r.withdrawalFixedAmount || "0"); 

    const activeRetireAge = this.getCalculatedWithdrawalStartAge(); 
    setVal('wdAge1', activeRetireAge); 
    setVal('wdAmt1', r.wdAmt1 || "0"); 
    setVal('wdAge2', r.wdAge2 || ""); 
    setVal('wdAmt2', r.wdAmt2 || "0"); 
    setVal('wdAge3', r.wdAge3 || ""); 
    setVal('wdAmt3', r.wdAmt3 || "0"); 
    setVal('withdrawalStartStrategy', r.withdrawalStartStrategy || "immediate"); 
    setVal('withdrawalStartDate', r.withdrawalStartDate || "2035-01-01"); 

    const delayDateWrap = document.getElementById('delayDateWrapper'); 
    if (delayDateWrap) { 
      delayDateWrap.style.display = (r.withdrawalStartStrategy === 'delayed') ? 'block' : 'none'; 
    } 

    const pWrap = document.getElementById('percentageWrapper'); 
    const fWrap = document.getElementById('fixedAmountWrapper'); 
    if (pWrap && fWrap) { 
      if (r.withdrawalMethod === 'fixed') { 
        pWrap.style.display = 'none'; 
        fWrap.style.display = 'flex'; 
      } else { 
        pWrap.style.display = 'block'; 
        fWrap.style.display = 'none'; 
      } 
    } 

    // === SOCIAL SECURITY HYDRATION === 
    setCheck('incorporateSocialSecurity', s.incorporate); 
    setVal('socialSecurityAge', s.claimAge || "65"); 
    setVal('manualBenefitEstimate', s.manualBenefitEstimate || "0"); 

    const ssGroupWrap = document.getElementById('socialSecurityInputsGroup'); 
    if (ssGroupWrap) { 
      ssGroupWrap.style.display = s.incorporate ? 'flex' : 'none'; 
    } 

    // --- Safe Strategy & Max Switch Hydration for Pilot HSA Form --- 
    const h = this.state.hsa || {}; 
    const activeHsaStyle = h.contributionStyle || "profitsharing"; 
    setVal('growthRateHsa', h.growthRate || "4"); 
    setVal('hsaCoverageTier', h.coverageTier || "self"); 
    setVal('currentBalanceHsa', h.currentBalance || "0"); 
    setVal('annualMedicalExpensesHsa', h.annualExpenses || "0"); 
    setVal('hsaContributionStyle', activeHsaStyle);
    if (document.getElementById('hsaProfitSharingInputsGroup') && document.getElementById('hsaMonthlyInputsGroup')) { 
      document.getElementById('hsaProfitSharingInputsGroup').style.display = (activeHsaStyle === 'profitsharing') ? 'flex' : 'none'; 
      document.getElementById('hsaMonthlyInputsGroup').style.display = (activeHsaStyle === 'monthly') ? 'flex' : 'none'; 
    } 
    setCheck('maxHsaPsToggle', h.maxHsaPs); 
    setCheck('maxHsaPsOver55Toggle', h.maxHsaPsOver55); 
    setCheck('maxHsaMoToggle', h.maxHsaMo); 
    setCheck('maxHsaMoOver55Toggle', h.maxHsaMoOver55); 
    setVal('profitSharContribHsa', h.profitSharContrib || "0"); 
    setVal('profitSharContribHsaOver55', h.profitSharContribOver55 || "0"); 
    setVal('monthlyContribHsa', h.monthlyContrib || "0"); 
    setVal('monthlyContribHsaOver55', h.monthlyContribOver55 || "0"); 
    setVal('stopMonthlyDateHsa', h.stopMonthlyDate || ""); 
    setVal('stopAnnualDateHsa', h.stopAnnualDate || ""); 
    if (typeof window.syncHsaMaxToggles === 'function') { 
      window.syncHsaMaxToggles(); 
    } 

    // --- Safe Hydration for Brokerage Form Fields --- 
    const b = this.state.brokerage || {}; 
    setVal('growthRateBrokerage', b.growthRate || "4"); 
    setVal('currentBalanceBrokerage', b.currentBalance || "0"); 
    setVal('monthlyContribBrokerage', b.monthlyContrib || "0"); 

    // --- Safe Hydration for Standalone Spouse Account Fields --- 
    const sp = this.state.spouse || {}; 
    setVal('spouseIraGrowthRate', sp.iraGrowthRate || "4"); 
    setVal('spouseCurrentRothIra', sp.currentRothBalance || "0"); 
    setVal('spouseTradIraGrowthRate', sp.tradGrowthRate || "4"); 
    setVal('spouseCurrentTradIra', sp.currentTradBalance || "0"); 
    setVal('spouseBirthDate', sp.birthDate || "1979-01-01"); 
    setVal('spouseHsaCoverageTier', sp.hsaCoverageTier || "self"); 
    setVal('spouseGrowthRateHsa', sp.hsaGrowthRate || "4"); 
    setVal('spouseCurrentBalanceHsa', sp.hsaCurrentBalance || "0"); 
    setCheck('maxSpouseHsaMoToggle', sp.maxSpouseHsaMo); 
    setCheck('maxSpouseHsaMoOver55Toggle', sp.maxSpouseHsaMoOver55); 
    setVal('spouseMonthlyContribHsa', sp.hsaMonthlyContrib || "0"); 
    setVal('spouseMonthlyContribHsaOver55', sp.hsaMonthlyContribOver55 || "0"); 
    setCheck('maxSpouseIraUnder50Toggle', sp.maxSpouseIraUnder50); 
    setCheck('maxSpouseIraOver50Toggle', sp.maxSpouseIraOver50); 
    setVal('spouseIraAnnualUnder50', sp.annualUnder50 || "0"); 
    setVal('spouseIraAnnualOver50', sp.annualOver50 || "0"); 

    if (typeof window.syncSpouseHsaMaxToggles === 'function') window.syncSpouseHsaMaxToggles(); 
    if (typeof window.syncSpouseIraMaxToggles === 'function') window.syncSpouseIraMaxToggles(); 
    if (typeof window.validateSpouseHsaLimits === 'function') window.validateSpouseHsaLimits(); 
    if (typeof window.validateSpouseIraLimits === 'function') window.validateSpouseIraLimits(); 

    const mbcbpGroup = document.getElementById('mbcbpInputsGroup'); 
    if (mbcbpGroup) mbcbpGroup.style.display = f.enrolledMBCBP ? 'flex' : 'none'; 
    const raiseGroup = document.getElementById('compoundingRaiseGroup'); 
    if (raiseGroup) raiseGroup.style.display = c.applyPayRaise ? 'flex' : 'none'; 

    const penState = this.state.pension || { monthlyAmount: 0, startDate: '' }; 
    setVal('pensionMonthlyAmount', penState.monthlyAmount || "0"); 
    setVal('pensionStartDate', penState.startDate || "2035-01-01"); 

    // --- Input Field View Hydration for Supplemental Income --- 
    const suppState = this.state.supplementalIncome || { monthlyAmount: 0, isTaxable: false, monthlyAmount2: 0, isTaxable2: false }; 
    
    // FIXED: Uses safe fallback conditions so string zero conversions pass perfectly
    setVal('suppMonthlyAmount', suppState.monthlyAmount ?? 0); 
    setCheck('suppIsTaxable', suppState.isTaxable); 
    setVal('suppMonthlyAmount2', suppState.monthlyAmount2 ?? 0); 
    setCheck('suppIsTaxable2', suppState.isTaxable2); 
  }
  syncGlobalState() { 
    window.career = this.state.career; 
    window.f1k = this.state.fortyOneK || {}; 
    window.ira = this.state.ira || {}; 
    window.hsa = this.state.hsa || {}; 
    window.retirementStrategy = this.state.retirementStrategy || {}; 
    window.socialSecurity = this.state.socialSecurity || {}; 
  } 

  openModal(id) { 
    this.dom.modalWindows.forEach(m => m.style.display = 'none'); 
    if (this.dom.overlay) this.dom.overlay.style.display = 'flex'; 
    const modal = document.getElementById(id); 
    if (modal) { 
      modal.style.display = 'block'; 
      if (id === 'retirementModal') { 
        const activeAgeInput = document.getElementById('wdAge1'); 
        if (activeAgeInput) { 
          activeAgeInput.value = this.getCalculatedWithdrawalStartAge(); 
        } 
        this.validateWithdrawalAgeTiers(); 
      } 
    } 
  } 

  getCalculatedWithdrawalStartAge() { 
    const career = this.state.career; 
    const retStrat = this.state.retirementStrategy; 
    if (!career || !career.birthDate) return "65"; 
    if (retStrat.withdrawalStartStrategy !== 'delayed' || !retStrat.withdrawalStartDate) { 
      return career.retirementAge || "65"; 
    } 
    const birthDate = new Date(career.birthDate + 'T00:00:00'); 
    const delayedYear = new Date(retStrat.withdrawalStartDate + 'T00:00:00').getFullYear(); 
    const calculatedAge = delayedYear - birthDate.getFullYear(); 
    return String(calculatedAge); 
  } 

  closeAllModals() { 
    if (this.dom.overlay) this.dom.overlay.style.display = 'none'; 
    this.dom.modalWindows.forEach(m => m.style.display = 'none'); 
  } 

  getHourlyPayRate(seatKey, seniorityYear) { 
    if (!PAY_TABLE[seatKey]) return 0; 
    const index = Math.min(Math.max(parseInt(seniorityYear), 1), 12) - 1; 
    return PAY_TABLE[seatKey][index]; 
  } 

  // FIXED: Duplications removed. Declared only once cleanly.
  getFullRetirementAge(birthYear) { 
    if (birthYear <= 1937) return { years: 65, months: 0 }; 
    if (birthYear >= 1943 && birthYear <= 1954) return { years: 66, months: 0 }; 
    if (birthYear >= 1960) return { years: 67, months: 0 }; 
    const transitions = { 1955: 2, 1956: 4, 1957: 6, 1958: 8, 1959: 10 }; 
    return { years: 66, months: transitions[birthYear] }; 
  } 

  calculatePIA(aime) { 
    const bp = SSA_HISTORICAL_DATA.bendPoints2026; 
    let pia = 0; 
    if (aime <= bp.first) pia = aime * 0.90; 
    else if (aime <= bp.second) pia = (bp.first * 0.90) + ((aime - bp.first) * 0.32); 
    else pia = (bp.first * 0.90) + ((bp.second - bp.first) * 0.32) + ((aime - bp.second) * 0.15); 
    return Math.floor(pia * 10) / 10; 
  } 

  calculateTrueAIME(earningsHistory, age60Year) { 
    const indexingTargetAWI = SSA_HISTORICAL_DATA.awiSeries[age60Year] || 70165.24; 
    let indexedEarnings = []; 
    for (let year = 1985; year <= 2026; year++) { 
      let rawEarnings = earningsHistory[year] || 0; 
      let cap = SSA_HISTORICAL_DATA.maxWageBase[year] || 181800; 
      let cappedEarnings = Math.min(rawEarnings, cap); 
      let yearAWI = SSA_HISTORICAL_DATA.awiSeries[year] || indexingTargetAWI; 
      let indexFactor = (year < age60Year) ? (indexingTargetAWI / yearAWI) : 1.0; 
      indexedEarnings.push(cappedEarnings * indexFactor); 
    } 
    indexedEarnings.sort((a, b) => b - a); 
    const top35Years = indexedEarnings.slice(0, 35); 
    const totalSum = top35Years.reduce((sum, val) => sum + val, 0); 
    return Math.floor(totalSum / 420); 
  }
  calculateDynamicIncomeTaxes(taxableBaseIncome) { 
    const tax = this.state.taxProfile; 
    let standardDeduction = 15000; 
    if (tax.filingStatus === 'married_jointly' || tax.filingStatus === 'qualifying_surviving_spouse') { 
      standardDeduction = 30000; 
    } else if (tax.filingStatus === 'head_household') { 
      standardDeduction = 22500; 
    } 
    const appliedDeduction = tax.deductionMethod === 'itemized' ? Math.max(tax.manualItemizedAmount, standardDeduction) : standardDeduction; 
    let federalTaxableIncome = Math.max(0, taxableBaseIncome - appliedDeduction); 
    let totalFederalTaxPaid = 0; 
    let activeBrackets = tax.brackets; 
    if (!tax.predictCustomBrackets) { 
      const scaleFactor = (tax.filingStatus === 'married_jointly') ? 2 : 1; 
      activeBrackets = [ 
        { rate: 10, limit: 11000 * scaleFactor }, 
        { rate: 12, limit: 44725 * scaleFactor }, 
        { rate: 22, limit: 95375 * scaleFactor }, 
        { rate: 24, limit: 182100 * scaleFactor }, 
        { rate: 32, limit: 231250 * scaleFactor }, 
        { rate: 35, limit: 578125 * scaleFactor }, 
        { rate: 37, limit: Infinity } 
      ]; 
    }
    let previousLimit = 0; 
    for (let i = 0; i < activeBrackets.length; i++) { 
      let bracket = activeBrackets[i]; 
      if (federalTaxableIncome > previousLimit) { 
        let taxableInThisBracket = Math.min(federalTaxableIncome, bracket.limit) - previousLimit; 
        totalFederalTaxPaid += taxableInThisBracket * (bracket.rate / 100); 
        previousLimit = bracket.limit; 
      } else { 
        break; 
      } 
    } 
    let totalStateTaxPaid = 0; 
    const noTaxStates = ['AK', 'FL', 'NV', 'NH', 'SD', 'TN', 'TX', 'WA', 'WY']; 
    const flatTaxStates = { 'AZ': 2.5, 'CO': 4.4, 'ID': 5.8, 'IL': 4.95, 'IN': 3.05, 'MI': 4.25, 'MS': 5.0, 'NC': 4.5, 'PA': 3.07, 'UT': 4.65 }; 
    if (!noTaxStates.includes(tax.stateOfResidence)) { 
      let stateTaxableIncome = Math.max(0, taxableBaseIncome - appliedDeduction); 
      if (flatTaxStates[tax.stateOfResidence]) { 
        totalStateTaxPaid = stateTaxableIncome * (flatTaxStates[tax.stateOfResidence] / 100); 
      } else { 
        totalStateTaxPaid = stateTaxableIncome * 0.05; 
      } 
    } 
    return totalFederalTaxPaid + totalStateTaxPaid; 
  } 

  renderStateTaxPanel() { 
    const stateKey = this.state.taxProfile.stateOfResidence || 'ID'; 
    const elTitle = document.getElementById('statePanelTitle'); 
    const elBody = document.getElementById('statePanelBody'); 
    if (!elTitle || !elBody) return; 
    const stateTaxProfiles = { 
      'AK': { name: 'Alaska', type: 'No Income Tax', detail: '0.0% standard rate on earned income portfolio pools.' }, 
      'FL': { name: 'Florida', type: 'No Income Tax', detail: '0.0% standard rate on earned income portfolio pools.' }, 
      'NV': { name: 'Nevada', type: 'No Income Tax', detail: '0.0% standard rate on earned income portfolio pools.' }, 
      'NH': { name: 'New Hampshire', type: 'No Income Tax', detail: '0.0% standard rate on earned income portfolio pools.' }, 
      'SD': { name: 'South Dakota', type: 'No Income Tax', detail: '0.0% standard rate on earned income portfolio pools.' }, 
      'TN': { name: 'Tennessee', type: 'No Income Tax', detail: '0.0% standard rate on earned income portfolio pools.' }, 
      'TX': { name: 'Texas', type: 'No Income Tax', detail: '0.0% standard rate on earned income portfolio pools.' }, 
      'WA': { name: 'Washington', type: 'No Income Tax', detail: '0.0% standard rate on earned income portfolio pools.' }, 
      'WY': { name: 'Wyoming', type: 'No Income Tax', detail: '0.0% standard rate on earned income portfolio pools.' }, 
      'AZ': { name: 'Arizona', type: 'Flat Income Tax', detail: '2.50% uniform rate applied across all filing brackets.' }, 
      'CO': { name: 'Colorado', type: 'Flat Income Tax', detail: '4.40% uniform rate applied across all filing brackets.' }, 
      'ID': { name: 'Idaho', type: 'Flat Income Tax', detail: '5.30% uniform rate applied across all filing brackets.' }, 
      'IL': { name: 'Illinois', type: 'Flat Income Tax', detail: '4.95% uniform rate applied across all filing brackets.' }, 
      'IN': { name: 'Indiana', type: 'Flat Income Tax', detail: '2.95% uniform rate applied across all filing brackets.' }, 
      'MI': { name: 'Michigan', type: 'Flat Income Tax', detail: '4.25% uniform rate applied across all filing brackets.' }, 
      'MS': { name: 'Mississippi', type: 'Flat Income Tax', detail: '4.00% uniform rate applied across all filing brackets.' }, 
      'NC': { name: 'North Carolina', type: 'Flat Income Tax', detail: '3.99% uniform rate applied across all filing brackets.' }, 
      'PA': { name: 'Pennsylvania', type: 'Flat Income Tax', detail: '3.07% uniform rate applied across all filing brackets.' }, 
      'UT': { name: 'Utah', type: 'Flat Income Tax', detail: '4.50% uniform rate applied across all filing brackets.' }, 
      'OH': { name: 'Flat Over Exemption', type: 'Flat Income Tax', detail: '2.75% uniform rate applied on income portions exceeding $26,050.' } 
    }; 
    const currentProfile = stateTaxProfiles[stateKey] || { name: stateKey, type: 'Progressive Graduated Brackets', detail: 'Dynamic multi-tier rate tracking schedules (Estimated average baseline modeling: 5.0% flat projection equivalent).' }; 
    elTitle.innerText = `${currentProfile.name} State Tax Info (2026)`; 
    elBody.innerHTML = ` 
      <div style="font-weight: 800; font-size: 0.95rem; color: #fff; margin-bottom: 6px; text-transform: uppercase;">${currentProfile.type}</div> 
      <div style="font-weight: 600; font-size: 0.85rem; color: #8a8a8f; line-height: 1.4;">${currentProfile.detail}</div> 
    `; 
  }
  calculateSocialSecurityBenefit(birthDateStr, claimAge, earningsHistory) { 
    const birthDate = new Date(birthDateStr); 
    const birthYear = birthDate.getFullYear(); 
    const age60Year = birthYear + 60; 
    const aime = this.calculateTrueAIME(earningsHistory, age60Year); 
    const basePIA = this.calculatePIA(aime); 
    const fra = this.getFullRetirementAge(birthYear); 
    const fraTotalMonths = (fra.years * 12) + fra.months; 
    const claimTotalMonths = claimAge * 12; 
    const monthDifference = claimTotalMonths - fraTotalMonths; 
    let finalBenefit = basePIA; 
    if (monthDifference < 0) { 
      const earlyMonths = Math.abs(monthDifference); 
      const first36 = Math.min(earlyMonths, 36); 
      const remainingMonths = Math.max(0, earlyMonths - 36); 
      const reduction = (first36 * (5 / 9 / 100)) + (remainingMonths * (5 / 12 / 100)); 
      finalBenefit = basePIA * (1 - reduction); 
    } else if (monthDifference > 0) { 
      const delayedMonths = Math.min(monthDifference, (70 * 12) - fraTotalMonths); 
      const credit = delayedMonths * (2 / 3 / 100); 
      finalBenefit = basePIA * (1 + credit); 
    } 
    return Math.floor(finalBenefit * 12); 
  } 

  generateProjections() { 
    const career = this.state.career; 
    const f1k = this.state.fortyOneK; 
    const ira = this.state.ira; 
    if (!career || !career.birthDate || !career.hireDate) { 
      console.warn("Calculation engine suspended: Waiting for required Profile Dates."); 
      return; 
    } 
  
    const IRS_CONFIG = { BASE_LIMIT: 24500, CATCH_UP_50: 32500, SUPER_CATCH_UP: 35750, COMBINED_LIMIT: 72000 }; 
    const today = new Date(); 
    const startMonth = today.getMonth(); 
    const startYear = today.getFullYear(); 
    const hireDate = new Date(career.hireDate + 'T00:00:00'); 
    const birthDate = new Date(career.birthDate + 'T00:00:00'); 
    const birthYear = birthDate.getFullYear(); 
    const birthMonth = birthDate.getMonth(); 
    const hoursPerMonth = parseFloat(career.hoursPerMonth || 75); 
    const coDirectRate = parseFloat(f1k.companyDirect || 0) / 100; 
    const recTradRate = parseFloat(f1k.personalTradPercent || 0) / 100; 
    const recRothRate = parseFloat(f1k.personalRothPercent || 0) / 100; 
    const amtFoPsTrad = parseFloat(f1k.foTradProfitSharing || 0); 
    const amtFoPsRoth = parseFloat(f1k.foRothProfitSharing || 0); 
    const amtCaptPsTrad = parseFloat(f1k.captTradProfitSharing || 0); 
    const amtCaptPsRoth = parseFloat(f1k.captRothProfitSharing || 0); 
    const m1 = f1k.month401aFirst !== "" && f1k.month401aFirst !== undefined ? parseInt(f1k.month401aFirst) : null; 
    const amt1 = parseFloat(f1k.amount401aFirst || 0); 
    const m2 = f1k.month401aSecond !== "" && f1k.month401aSecond !== undefined ? parseInt(f1k.month401aSecond) : null; 
    const amt2 = parseFloat(f1k.amount401aSecond || 0); 
    const spouseBirthYear = ira.spouseBirthDate ? new Date(ira.spouseBirthDate + 'T00:00:00').getFullYear() : 0; 
    const IRS_CEILING_UNDER_50 = 7500; 
    const IRS_CEILING_OVER_50 = 8600; 
    const parsedYourUnder50 = parseFloat(ira && ira.iraAnnualUnder50) || 0; 
    const parsedYourOver50 = parseFloat(ira && ira.iraAnnualOver50) || 0; 
    const parsedSpouseUnder50 = parseFloat(ira && ira.spouseIraAnnualUnder50) || 0; 
    const parsedSpouseOver50 = parseFloat(ira && ira.spouseIraAnnualOver50) || 0; 
    const annualLimitUnder50 = Math.min(parsedYourUnder50, IRS_CEILING_UNDER_50); 
    const annualLimitOver50 = Math.min(parsedYourOver50, IRS_CEILING_OVER_50); 
    const spouseAnnualLimitUnder50 = Math.min(parsedSpouseUnder50, IRS_CEILING_UNDER_50); 
    const spouseAnnualLimitOver50 = Math.min(parsedSpouseOver50, IRS_CEILING_OVER_50); 
    const applyPayRaise = career.applyPayRaise || false; 
    const contractStartDate = career.contractStartDate ? new Date(career.contractStartDate + 'T00:00:00') : null; 
    const raisePercentInput = parseFloat(career.compoundingRaisePercent || 0) / 100; 
    const monthlyInterest401k = (parseFloat(f1k.growthRate || 7) / 100) / 12; 
    const monthlyInterestMBCBP = (parseFloat(f1k.growthRateMBCBP || 5) / 100) / 12; 
    const monthlyInterestTsp = (parseFloat(this.state.tsp.growthRate || 7) / 100) / 12; 
    const monthlyInterestRothIra = (parseFloat(ira.iraGrowthRate || 7) / 100) / 12; 
    const monthlyInterestTradIra = (parseFloat(this.state.tradIra?.growthRate || 4) / 100) / 12; 
    let balanceTrad401k = parseFloat(f1k.currentTradBalance || 0); 
    let balanceRoth401k = parseFloat(f1k.currentRothBalance || 0); 
    let balanceMBCBP = parseFloat(f1k.currentMBCBPBalance || 0); 
    let balanceTradTsp = parseFloat(this.state.tsp.currentTradBalance || 0); 
    let balanceRothTsp = parseFloat(this.state.tsp.currentRothBalance || 0); 
    let balanceYourIra = parseFloat(ira.currentRothIra || 0); 
    let balanceSpouseIra = parseFloat(this.state.spouse?.currentRothBalance || this.state.ira?.spouseCurrentRothIra) || 0; 
    const monthlyTradTspContrib = parseFloat(this.state.tsp.annualTradContrib || 0) / 12; 
    const monthlyRothTspContrib = parseFloat(this.state.tsp.annualRothContrib || 0) / 12; 
    const d2 = career.conversionDate2 ? new Date(career.conversionDate2 + 'T00:00:00') : null; 
    const d3 = career.conversionDate3 ? new Date(career.conversionDate3 + 'T00:00:00') : null; 
    const d4 = career.conversionDate4 ? new Date(career.conversionDate4 + 'T00:00:00') : null; 
    let maxAgeLimit = 65; 
    if (career.retirementStrategy === 'By Age' && career.retirementAge) maxAgeLimit = parseInt(career.retirementAge); 
    let targetRetirementYear = birthYear + maxAgeLimit; 
    let targetRetirementMonth = birthMonth; 
    if (career.retirementStrategy === 'By Date' && career.retirementCustomDate) { 
      const customDateObj = new Date(career.retirementCustomDate + 'T00:00:00'); 
      targetRetirementYear = customDateObj.getFullYear(); 
      targetRetirementMonth = customDateObj.getMonth(); 
    } 
      // Set up standard multipliers for dynamic compound inflation tracking loops
  let baseInflationFactor = 1.0;
  const inflationPercent = parseFloat(this.state.irsInflation?.estimatedIncreaseRate || 0) / 100;
  const runIrsInflation = !!this.state.irsInflation?.applyInflation;
    this.calculatedForecastMatrix = []; 
    this.earningsHistoryCache = {}; 
    let currentYear = startYear; 
    let currentMonth = startMonth; 
    let monthCounter = 0; 
    let currentYearIndividualTotal = 0; 
    let currentYearCombinedTotal = 0;
    const spouseBirth = new Date(this.state.spouse?.birthDate || '1979-01-01'); 
    let pilotTradIRABalance = parseFloat(this.state.tradIra?.currentTradBalance) || 0; 
    let spouseTradIRABalance = parseFloat(this.state.spouse?.currentTradBalance) || 0; 
    let spouseRothIRABalance = parseFloat(this.state.spouse?.currentRothBalance || this.state.spouse?.spouseCurrentRothIra) || 0; 
    let brokerageBalance = parseFloat(this.state.brokerage?.currentBalance) || 0; 
    let pilotHSABalance = parseFloat(this.state.hsa?.currentBalance) || 0; 
    let spouseHSABalance = parseFloat(this.state.spouse?.hsaCurrentBalance) || 0; 
    let annualHsaContributionSum = 0; 

    let activeHoursThisMonth = parseFloat(career.hoursPerMonth || 72); 
    const hourMilestones = [ 
      { age: parseFloat(career.varHoursAge1), hours: parseFloat(career.varHoursAmt1) }, 
      { age: parseFloat(career.varHoursAge2), hours: parseFloat(career.varHoursAmt2) }, 
      { age: parseFloat(career.varHoursAge3), hours: parseFloat(career.varHoursAmt3) } 
    ].filter(m => !isNaN(m.age) && m.age !== null); 
    hourMilestones.sort((a, b) => a.age - b.age); 

    while ((currentYear < targetRetirementYear || (currentYear === targetRetirementYear && currentMonth < targetRetirementMonth)) && monthCounter < 600) { 
      monthCounter++; 
      const checkLoopDate = new Date(currentYear, currentMonth, 1); 
      const totalAgeMonths = (currentYear - birthYear) * 12 + (currentMonth - birthMonth); 
      const activeAge = totalAgeMonths / 12; 

      if (career.varyHoursByAge && hourMilestones.length > 0) { 
        activeHoursThisMonth = parseFloat(career.hoursPerMonth || 72); 
        hourMilestones.forEach(m => { 
          if (activeAge >= m.age) activeHoursThisMonth = m.hours; 
        }); 
      } else { 
        activeHoursThisMonth = parseFloat(career.hoursPerMonth || 72); 
      } 

          // Reset yearly counters and update the compounded inflation adjustment factor
    if (currentMonth === 0) {
      annualHsaContributionSum = 0;
      currentYearIndividualTotal = 0;
      currentYearCombinedTotal = 0;
      if (runIrsInflation && currentYear > startYear) {
        baseInflationFactor = Math.pow(1 + inflationPercent, currentYear - startYear);
      }
    }

      let spouseAgeMonths = (currentYear - spouseBirth.getFullYear()) * 12 + (currentMonth - spouseBirth.getMonth()); 
      let spouseYearsOld = Math.floor(spouseAgeMonths / 12); 

      const activeTradIraGrowth = this.state.tradIra && this.state.tradIra.growthRate ? parseFloat(this.state.tradIra.growthRate) : 4; 
      const activeSpouseTradGrowth = this.state.spouse && this.state.spouse.tradGrowthRate ? parseFloat(this.state.spouse.tradGrowthRate) : 4; 
      const activeSpouseRothGrowth = this.state.spouse && this.state.spouse.iraGrowthRate ? parseFloat(this.state.spouse.iraGrowthRate) : 4; 
      const activeBrokerageGrowth = this.state.brokerage && this.state.brokerage.growthRate ? parseFloat(this.state.brokerage.growthRate) : 4; 
      const activeHsaGrowth = this.state.hsa && this.state.hsa.growthRate ? parseFloat(this.state.hsa.growthRate) : 4; 
      const activeSpouseHsaGrowth = this.state.spouse && this.state.spouse.hsaGrowthRate ? parseFloat(this.state.spouse.hsaGrowthRate) : 4; 

      pilotTradIRABalance *= (1 + activeTradIraGrowth / 1200); 
      spouseTradIRABalance *= (1 + activeSpouseTradGrowth / 1200); 
      brokerageBalance *= (1 + activeBrokerageGrowth / 1200); 
      pilotHSABalance *= (1 + activeHsaGrowth / 1200); 
      spouseHSABalance *= (1 + activeSpouseHsaGrowth / 1200); 

      const monthlyBrokerageInflow = this.state.brokerage && this.state.brokerage.monthlyContrib ? parseFloat(this.state.brokerage.monthlyContrib) : 0; 
      brokerageBalance += monthlyBrokerageInflow; 

      if (currentMonth === 0 && this.state.spouse) { 
        const spouseOver50Amt = parseFloat(this.state.spouse.annualOver50) || 0; 
        const spouseUnder50Amt = parseFloat(this.state.spouse.annualUnder50) || 0; 
        balanceSpouseIra += (spouseYearsOld >= 50) ? spouseOver50Amt : spouseUnder50Amt; 
      }

          let hasStoppedMonthlyHsa = false;
    let hasStoppedAnnualHsa = false;
    let hsaCoverageChoice = 'self';
    if (this.state.hsa) {
      hasStoppedMonthlyHsa = this.state.hsa.stopMonthlyDate && (checkLoopDate >= new Date(this.state.hsa.stopMonthlyDate + 'T00:00:00'));
      hasStoppedAnnualHsa = this.state.hsa.stopAnnualDate && (checkLoopDate >= new Date(this.state.hsa.stopAnnualDate + 'T00:00:00'));
      hsaCoverageChoice = this.state.hsa.coverageTier || 'self';
    }

    // FIXED: Calculate the inflated ceiling right here so the logic below uses the correct scale!
    let baseHsaAnnualCeiling = ((hsaCoverageChoice === 'family') ? 8750 : 4400) * baseInflationFactor;
    if (activeAge >= 55) {
      baseHsaAnnualCeiling += (1000 * baseInflationFactor);
    }

    let hsaMonthlyRate = this.state.hsa && this.state.hsa.monthlyContrib ? parseFloat(this.state.hsa.monthlyContrib) : 0;
    let hsaCatchUpRate = this.state.hsa && this.state.hsa.monthlyContribOver55 ? parseFloat(this.state.hsa.monthlyContribOver55) : 0;
    let intendedMonthlyHsaDeposit = (activeAge >= 55) ? hsaCatchUpRate : hsaMonthlyRate;

    if (!hasStoppedMonthlyHsa && (annualHsaContributionSum < baseHsaAnnualCeiling)) {
      if (annualHsaContributionSum + intendedMonthlyHsaDeposit > baseHsaAnnualCeiling) {
        intendedMonthlyHsaDeposit = baseHsaAnnualCeiling - annualHsaContributionSum;
      }
      pilotHSABalance += intendedMonthlyHsaDeposit;
      annualHsaContributionSum += intendedMonthlyHsaDeposit;
    }

    if (currentMonth === 0 && !hasStoppedAnnualHsa && (annualHsaContributionSum < baseHsaAnnualCeiling)) {
      let annualHsaDeposit = this.state.hsa && this.state.hsa.profitSharContrib ? parseFloat(this.state.hsa.profitSharContrib) : 0;
      if (annualHsaContributionSum + annualHsaDeposit > baseHsaAnnualCeiling) {
        annualHsaDeposit = baseHsaAnnualCeiling - annualHsaContributionSum;
      }
      pilotHSABalance += annualHsaDeposit;
      annualHsaContributionSum += annualHsaDeposit;
    }

    if (currentMonth === 11 && this.state.hsa) {
      let medicalExpenses = parseFloat(this.state.hsa.annualExpenses) || 0;
      pilotHSABalance = Math.max(0, pilotHSABalance - medicalExpenses);
    }

    let spouseHsaInflow = this.state.spouse && this.state.spouse.hsaMonthlyContrib ? parseFloat(this.state.spouse.hsaMonthlyContrib) : 0;
    spouseHSABalance += spouseHsaInflow;
    const ageOnDec31ThisYear = currentYear - birthYear;

    // Scale standard statutory limits dynamically with the current year's inflation factor
    let activeIndividualLimit = IRS_CONFIG.BASE_LIMIT * baseInflationFactor;
    if (ageOnDec31ThisYear >= 60 && ageOnDec31ThisYear <= 63) {
      activeIndividualLimit = IRS_CONFIG.SUPER_CATCH_UP * baseInflationFactor;
    } else if (ageOnDec31ThisYear >= 50) {
      activeIndividualLimit = IRS_CONFIG.CATCH_UP_50 * baseInflationFactor;
    }

    let dynamicCombinedLimit = IRS_CONFIG.COMBINED_LIMIT * baseInflationFactor;
    // 💡 REMOVED: The duplicate let re-declaration of baseHsaAnnualCeiling from here to prevent syntax crashes!


      const continuousMonths = (currentYear - hireDate.getFullYear()) * 12 + (currentMonth - hireDate.getMonth()); 
      const seniorityYear = Math.max(1, Math.floor(continuousMonths / 12) + 1); 
      let activeSeat = career.aircraftSeat; 
      const planSeatChangesEnabled = !!career.planSeatChanges; 

      if (planSeatChangesEnabled) { 
        if (d4 && checkLoopDate >= d4 && career.fourthSeat) activeSeat = career.fourthSeat; 
        else if (d3 && checkLoopDate >= d3 && career.thirdSeat) activeSeat = career.thirdSeat; 
        else if (d2 && checkLoopDate >= d2 && career.secondSeat) activeSeat = career.secondSeat; 
      } 

      let hourlyRate = this.getHourlyPayRate(activeSeat, seniorityYear); 
      if (applyPayRaise && contractStartDate && raisePercentInput > 0 && checkLoopDate >= contractStartDate) { 
        const fullYearsElapsed = Math.floor(((currentYear - contractStartDate.getFullYear()) * 12 + (currentMonth - contractStartDate.getMonth())) / 12); 
        hourlyRate = hourlyRate * Math.pow(1 + raisePercentInput, fullYearsElapsed + 1); 
      } 

      const monthlyGrossPay = hourlyRate * activeHoursThisMonth; 
      const matchesCaptain = activeSeat.endsWith('A'); 
      const amtPsTrad = matchesCaptain ? amtCaptPsTrad : amtFoPsTrad; 
      const amtPsRoth = matchesCaptain ? amtCaptPsRoth : amtFoPsRoth; 

          if (!this.earningsHistoryCache[currentYear]) {
      this.earningsHistoryCache[currentYear] = 0;
    }
    this.earningsHistoryCache[currentYear] += monthlyGrossPay;

    let targetCompanyDC = monthlyGrossPay * coDirectRate;
    let contributionCompanyDC = 0;
    let mcbpSpill = 0;

    if (currentYearCombinedTotal < dynamicCombinedLimit) {
      let availableCombinedRoom = dynamicCombinedLimit - currentYearCombinedTotal;
      contributionCompanyDC = Math.min(targetCompanyDC, availableCombinedRoom);
      mcbpSpill = targetCompanyDC - contributionCompanyDC;
      currentYearCombinedTotal += contributionCompanyDC;
    } else {
      mcbpSpill = targetCompanyDC;
    }

    let targetPersonalTrad = monthlyGrossPay * recTradRate;
    let targetPersonalRoth = monthlyGrossPay * recRothRate;
    let targetPsTrad = (currentMonth === 2) ? amtPsTrad : 0;
    let targetPsRoth = (currentMonth === 2) ? amtPsRoth : 0;

    let contributionPersonalTrad = 0;
    let contributionPersonalRoth = 0;
    let contributionPsTrad = 0;
    let contributionPsRoth = 0;

    if (currentYearIndividualTotal < activeIndividualLimit && currentYearCombinedTotal < dynamicCombinedLimit) {
      let allowed = Math.min(targetPersonalTrad, (activeIndividualLimit - currentYearIndividualTotal), (dynamicCombinedLimit - currentYearCombinedTotal));
      contributionPersonalTrad = allowed;
      currentYearIndividualTotal += allowed;
      currentYearCombinedTotal += allowed;
    }

    if (currentYearIndividualTotal < activeIndividualLimit && currentYearCombinedTotal < dynamicCombinedLimit) {
      let allowed = Math.min(targetPersonalRoth, (activeIndividualLimit - currentYearIndividualTotal), (dynamicCombinedLimit - currentYearCombinedTotal));
      contributionPersonalRoth = allowed;
      currentYearIndividualTotal += allowed;
      currentYearCombinedTotal += allowed;
    }

    if (currentYearIndividualTotal < activeIndividualLimit && currentYearCombinedTotal < dynamicCombinedLimit) {
      let allowed = Math.min(targetPsTrad, (activeIndividualLimit - currentYearIndividualTotal), (dynamicCombinedLimit - currentYearCombinedTotal));
      contributionPsTrad = allowed;
      currentYearIndividualTotal += allowed;
      currentYearCombinedTotal += allowed;
    }

    if (currentYearIndividualTotal < activeIndividualLimit && currentYearCombinedTotal < dynamicCombinedLimit) {
      let allowed = Math.min(targetPsRoth, (activeIndividualLimit - currentYearIndividualTotal), (dynamicCombinedLimit - currentYearCombinedTotal));
      contributionPsRoth = allowed;
      currentYearIndividualTotal += allowed;
      currentYearCombinedTotal += allowed;
    }

    let target401a = 0;
    if (m1 !== null && currentMonth === m1) target401a += amt1;
    if (m2 !== null && currentMonth === m2) target401a += amt2;

    let contribution401a = 0;
    if (currentYearCombinedTotal < dynamicCombinedLimit) {
      contribution401a = Math.min(target401a, (dynamicCombinedLimit - currentYearCombinedTotal));
      currentYearCombinedTotal += contribution401a;
    }

      // --- IRA CALCULATIONS WITH CALENDAR YEAR CATCH-UP FIXED --- 
      let currentMonthIraDeposit = 0; 
      let currentMonthSpouseIraDeposit = 0; 
      if (currentMonth === 0) { 
        if (!ira.iraOnlyCaptain || matchesCaptain) { 
          currentMonthIraDeposit = (ageOnDec31ThisYear >= 50) ? annualLimitOver50 : annualLimitUnder50; 
        } 
        if (spouseBirthYear > 0) { 
          const spouseAgeOnDec31ThisYear = currentYear - spouseBirthYear; 
          currentMonthSpouseIraDeposit = (spouseAgeOnDec31ThisYear >= 50) ? spouseAnnualLimitOver50 : spouseAnnualLimitUnder50; 
        } 
      }
      // --- BALANCES & INTEREST ADDITIONS --- 
      balanceTrad401k = (balanceTrad401k + (contributionCompanyDC + contributionPersonalTrad + contributionPsTrad)) * (1 + monthlyInterest401k); 
      balanceRoth401k = (balanceRoth401k + contributionPersonalRoth + contributionPsRoth + contribution401a) * (1 + monthlyInterest401k); 
      balanceMBCBP = f1k.enrolledMBCBP ? (balanceMBCBP + mcbpSpill) * (1 + monthlyInterestMBCBP) : 0; 
      balanceTradTsp = (balanceTradTsp + monthlyTradTspContrib) * (1 + monthlyInterestTsp); 
      balanceRothTsp = (balanceRothTsp + monthlyRothTspContrib) * (1 + monthlyInterestTsp); 
      
      // FIXED: Assigned independent compound interest layers based on separate asset types 
      balanceYourIra = (balanceYourIra + currentMonthIraDeposit) * (1 + monthlyInterestRothIra); 
      spouseRothIRABalance = (spouseRothIRABalance + currentMonthSpouseIraDeposit) * (1 + monthlyInterestRothIra); 
      pilotTradIRABalance = (pilotTradIRABalance) * (1 + monthlyInterestTradIra); 

      let totalCombined401k = balanceTrad401k + balanceRoth401k; 
      let totalTsp = balanceTradTsp + balanceRothTsp; 

      // --- UPDATED GRAND TOTALS --- 
      let grandTotalTradCombined = balanceTrad401k + balanceTradTsp + balanceMBCBP + pilotTradIRABalance + spouseTradIRABalance; 
      let grandTotalRothCombined = balanceRoth401k + balanceRothTsp + balanceYourIra + spouseRothIRABalance + pilotHSABalance + spouseHSABalance; 
      let grandTotalEverything = grandTotalTradCombined + grandTotalRothCombined; 

      let shortMonth = checkLoopDate.toLocaleString('default', { month: 'short' }); 
      let shortYear = currentYear.toString().slice(-2); 

      this.calculatedForecastMatrix.push({ 
        dateString: `${shortMonth} ${shortYear}`, seat: activeSeat, rate: hourlyRate, grossPay: monthlyGrossPay, age: activeAge.toFixed(1), 
        companyDC: contributionCompanyDC, isCompanyDCThrottled: (contributionCompanyDC < targetCompanyDC), 
        personalTrad: contributionPersonalTrad, isPersonalTradThrottled: (contributionPersonalTrad < targetPersonalTrad), 
        personalRoth: contributionPersonalRoth, isPersonalRothThrottled: (contributionPersonalRoth < targetPersonalRoth), 
        psTrad: contributionPsTrad, isPsTradThrottled: (contributionPsTrad < targetPsTrad), 
        psRoth: contributionPsRoth, isPsRothThrottled: (contributionPsRoth < targetPsRoth), 
        amt401a: contribution401a, is401aThrottled: (contribution401a < target401a),
        ytdIndividual: currentYearIndividualTotal, ytdCombined: currentYearCombinedTotal,
        spillOver: mcbpSpill, 
        f1kTrad: balanceTrad401k, f1kRoth: balanceRoth401k, combined401k: totalCombined401k, mbcbpBal: balanceMBCBP, 
        tspTotal: totalTsp, yourIraBal: balanceYourIra, spouseIraBal: balanceSpouseIra, pilotTradIraBal: pilotTradIRABalance, 
        spouseTradIraBal: spouseTradIRABalance, brokerageBal: brokerageBalance, pilotHsaBal: pilotHSABalance, 
        spouseHsaBal: spouseHSABalance, grandTrad: grandTotalTradCombined, grandRoth: grandTotalRothCombined, grandCombined: grandTotalEverything 
      }); 

      currentMonth++; 
      if (currentMonth > 11) { 
        currentMonth = 0; 
        currentYear++; 
      } 
    } // Closes accumulation while loop
    // Update Accumulation Dashboard Cards 
    if (this.calculatedForecastMatrix.length > 0) { 
      const finalRow = this.calculatedForecastMatrix[this.calculatedForecastMatrix.length - 1]; 
      const formatTileCurrency = (val) => '$' + Math.round(val).toLocaleString(); 

      // 1. Grand Macro Tiles 
      if (document.getElementById('tileGrandTrad')) document.getElementById('tileGrandTrad').innerText = formatTileCurrency(finalRow.grandTrad); 
      if (document.getElementById('tileGrandRoth')) document.getElementById('tileGrandRoth').innerText = formatTileCurrency(finalRow.grandRoth); 
      if (document.getElementById('tileGrandCombined')) document.getElementById('tileGrandCombined').innerText = formatTileCurrency(finalRow.grandCombined); 

      // === FIXED: Robust Account Breakdown Tiles with Dynamic Auto-Hide Matrix === 
      const updateTileWithVisibility = (tileId, balanceValue) => { 
        const tileEl = document.getElementById(tileId); 
        const cardEl = tileEl ? (tileEl.closest('.metric-card') || tileEl.closest('.card') || tileEl.closest('.dashboard-card')) : null; 
        if (tileEl && cardEl) { 
          const sanitizedBalance = parseFloat(balanceValue); 
          const actualBalance = isNaN(sanitizedBalance) ? 0 : sanitizedBalance; 
          tileEl.innerText = formatTileCurrency(actualBalance); 
          
          // Absolute conditional validation check handles empty states perfectly
          if (actualBalance <= 0.01) { 
            cardEl.style.setProperty('display', 'none', 'important'); 
          } else { 
            cardEl.style.setProperty('display', 'block', 'important'); 
          } 
        } 
      }; 

      // Run the robust auto-hide validator loops safely for all account metrics 
      updateTileWithVisibility('tileCombined401k', finalRow.combined401k); 
      updateTileWithVisibility('tileMBCBPBal', finalRow.mbcbpBal); 
      updateTileWithVisibility('tileRothIRA', finalRow.yourIraBal); 
      updateTileWithVisibility('tileSpouseRothIRA', finalRow.spouseIraBal); 
      updateTileWithVisibility('tileTSPTotal', finalRow.tspTotal); 
      updateTileWithVisibility('tilePilotTradIRA', finalRow.pilotTradIraBal); 
      updateTileWithVisibility('tileSpouseTradIRA', finalRow.spouseTradIraBal); 
      updateTileWithVisibility('tilePilotHSA', finalRow.pilotHsaBal); 
      updateTileWithVisibility('tileSpouseHSA', finalRow.spouseHsaBal); 
      updateTileWithVisibility('tileBrokerageBal', finalRow.brokerageBal); 

      // 4. Milestone Retirement Age Tile 
      const elRetirementAgeTile = document.getElementById('tileRetirementAge'); 
      if (elRetirementAgeTile) { 
        if (career.retirementStrategy === 'By Age' && career.retirementAge) { 
          elRetirementAgeTile.innerText = String(career.retirementAge); 
        } else if (career.retirementStrategy === 'By Date' && career.retirementCustomDate) { 
          const customRetirementDateObj = new Date(career.retirementCustomDate + 'T00:00:00'); 
          const birthDateObj = new Date(career.birthDate + 'T00:00:00'); 
          const ageDiffMs = customRetirementDateObj.getTime() - birthDateObj.getTime(); 
          const calculatedAgeAtDate = ageDiffMs / (1000 * 60 * 60 * 24 * 365.25); 
          elRetirementAgeTile.innerText = calculatedAgeAtDate.toFixed(1); 
        } else { 
          elRetirementAgeTile.innerText = String(maxAgeLimit); 
        } 
      } 
    } 
    this.renderForecastOutput();
    // =========================================================================
    // INTERLINKED RETIREMENT DRAWDOWN MATRIX GENERATOR (AGES ATTAINED TO 100)
    // =========================================================================
    const finalAccumRow = this.calculatedForecastMatrix[this.calculatedForecastMatrix.length - 1] || { grandTrad: 0, grandRoth: 0, age: maxAgeLimit }; 
    const retStrat = this.state.retirementStrategy; 
    const ssStrat = this.state.socialSecurity; 

    let activeTradIRA = finalAccumRow.grandTrad + retStrat.additionalTrad; 
    let activeRothIRA = finalAccumRow.grandRoth + retStrat.additionalRoth; 
    let retirementStartAge = Math.ceil(parseFloat(finalAccumRow.age)); 
    let retirementStartYear = currentYear; 
    let retirementMatrix = []; 
    let tradGrowthMultiplier = 1 + (retStrat.tradGrowth / 100); 
    let rothGrowthMultiplier = 1 + (retStrat.rothGrowth / 100); 

    let withdrawalStartCalendarYear = retirementStartYear; 
    if (retStrat.withdrawalStartStrategy === 'delayed' && retStrat.withdrawalStartDate) { 
      withdrawalStartCalendarYear = new Date(retStrat.withdrawalStartDate + 'T00:00:00').getFullYear(); 
    } 

    // Annual Drawdown Simulation Engine Loop (Age at Retirement to 100)
    for (let age = retirementStartAge; age <= 100; age++) { 
      let yearLabel = retirementStartYear + (age - retirementStartAge); 

      // Step 1: Compute Mandatory IRS Required Minimum Distributions (RMDs)
      let currentYearRMD = 0; 
      if (age >= 75 && IRS_RMD_UNIFORM_TABLE[age]) { 
        currentYearRMD = activeTradIRA / IRS_RMD_UNIFORM_TABLE[age]; 
      } else if (age >= 73 && age < 75) { 
        currentYearRMD = activeTradIRA / 26.5; 
      } 

      // --- Calculate Dynamic Pension Payout Timeline ---
      let pensionIncome = 0; 
      let pensionStartYear = withdrawalStartCalendarYear; 
      if (this.state.pension && this.state.pension.startDate) { 
        pensionStartYear = new Date(this.state.pension.startDate + 'T00:00:00').getFullYear(); 
      } 
      if (yearLabel >= pensionStartYear) { 
        pensionIncome = (parseFloat(this.state.pension.monthlyAmount) || 0) * 12; 
      } 

      // Step 2: Establish the Baseline Portfolio Target Withdrawal Amount
      let baselineTargetGoal = 0; 
      if (yearLabel < withdrawalStartCalendarYear) { 
        baselineTargetGoal = 0; 
        currentYearRMD = 0; 
      } else { 
        if (retStrat.withdrawalMethod === 'fixed') { 
          // Initialize your baseline step default to the primary tier amount
          let dynamicFixedAmount = parseFloat(retStrat.wdAmt1) || retStrat.withdrawalFixedAmount || 0; 
          
          const tiers = [ 
            { age: parseFloat(retStrat.wdAge1), amt: parseFloat(retStrat.wdAmt1) }, 
            { age: parseFloat(retStrat.wdAge2), amt: parseFloat(retStrat.wdAmt2) }, 
            { age: parseFloat(retStrat.wdAge3), amt: parseFloat(retStrat.wdAmt3) } 
          ].filter(t => !isNaN(t.age)); 
          
          tiers.sort((a, b) => a.age - b.age); 
          tiers.forEach(t => { 
            if (age >= t.age) { dynamicFixedAmount = t.amt; } 
          }); 

          if (retStrat.withdrawalOption === 'Option A') { 
            if ((activeTradIRA + activeRothIRA) > 0) { baselineTargetGoal = dynamicFixedAmount; } 
          } else { 
            if (retStrat.strategy === 'Traditional First') { 
              baselineTargetGoal = activeTradIRA > 0 ? dynamicFixedAmount : (activeRothIRA > 0 ? dynamicFixedAmount : 0); 
            } else { 
              baselineTargetGoal = activeRothIRA > 0 ? dynamicFixedAmount : (activeTradIRA > 0 ? dynamicFixedAmount : 0); 
            } 
          } 
        } else { 
          if (retStrat.withdrawalOption === 'Option A') { 
            baselineTargetGoal = (activeTradIRA + activeRothIRA) * (retStrat.withdrawalPercent / 100); 
          } else { 
            if (retStrat.strategy === 'Traditional First') { 
              baselineTargetGoal = activeTradIRA > 0 ? (activeTradIRA * (retStrat.withdrawalPercent / 100)) : (activeRothIRA * (retStrat.withdrawalPercent / 100)); 
            } else { 
              baselineTargetGoal = activeRothIRA > 0 ? (activeRothIRA * (retStrat.withdrawalPercent / 100)) : (activeTradIRA * (retStrat.withdrawalPercent / 100)); 
            } 
          } 
        } 
      } 

      let totalNeededFromAccounts = Math.max(baselineTargetGoal, currentYearRMD); 

      // Step 3: Integrate Dynamic Social Security Income Streams
      let socialSecurityIncome = 0; 
      if (ssStrat.incorporate && age >= ssStrat.claimAge) { 
        if (ssStrat.manualBenefitEstimate > 0) { 
          socialSecurityIncome = ssStrat.manualBenefitEstimate * 12; 
        } else { 
          socialSecurityIncome = this.calculateSocialSecurityBenefit(career.birthDate, ssStrat.claimAge, this.earningsHistoryCache); 
        } 
      }
      // Step 4: Process Two-Pool Sequential Balance Extractions
      let actualTradWithdrawn = 0; 
      let actualRothWithdrawn = 0; 

      if (retStrat.strategy === 'Traditional First') { 
        if (activeTradIRA >= totalNeededFromAccounts) { 
          actualTradWithdrawn = totalNeededFromAccounts; 
          activeTradIRA -= totalNeededFromAccounts; 
        } else { 
          actualTradWithdrawn = activeTradIRA; 
          let remainingDeficit = totalNeededFromAccounts - actualTradWithdrawn; 
          activeTradIRA = 0; 
          actualRothWithdrawn = Math.min(remainingDeficit, activeRothIRA); 
          activeRothIRA -= actualRothWithdrawn; 
        } 
        if (actualTradWithdrawn < currentYearRMD && activeTradIRA > 0) { 
          let extraRMDNeeded = Math.min((currentYearRMD - actualTradWithdrawn), activeTradIRA); 
          actualTradWithdrawn += extraRMDNeeded; 
          activeTradIRA -= extraRMDNeeded; 
        } 
      } else { 
        if (currentYearRMD > 0) { 
          actualTradWithdrawn = Math.min(currentYearRMD, activeTradIRA); 
          activeTradIRA -= actualTradWithdrawn; 
        } 
        let remainingRothGoal = Math.max(0, totalNeededFromAccounts - actualTradWithdrawn); 
        if (activeRothIRA >= remainingRothGoal) { 
          actualRothWithdrawn = remainingRothGoal; 
          activeRothIRA -= remainingRothGoal; 
        } else { 
          actualRothWithdrawn = activeRothIRA; 
          let portfolioDeficit = remainingRothGoal - actualRothWithdrawn; 
          activeRothIRA = 0; 
          let extraTradSpill = Math.min(portfolioDeficit, activeTradIRA); 
          actualTradWithdrawn += extraTradSpill; 
          activeTradIRA -= extraTradSpill; 
        } 
      } 

      // --- TAXABLE INCOME CALCULATIONS INCLUDING BOTH PENSIONS & SUPPLEMENTALS --- 
      let supplementalAnnualInflow = (parseFloat(this.state.supplementalIncome?.monthlyAmount) || 0) * 12; 
      let supplementalAnnualInflow2 = (parseFloat(this.state.supplementalIncome?.monthlyAmount2) || 0) * 12; 
      let totalSupplementalInflow = supplementalAnnualInflow + supplementalAnnualInflow2; 
      
      let grossPreTaxIncome = actualTradWithdrawn + actualRothWithdrawn + socialSecurityIncome + pensionIncome + totalSupplementalInflow; 
      let supplementalTaxablePool = this.state.supplementalIncome?.isTaxable ? supplementalAnnualInflow : 0; 
      let supplementalTaxablePool2 = this.state.supplementalIncome?.isTaxable2 ? supplementalAnnualInflow2 : 0; 
      
      let taxableBase = actualTradWithdrawn + pensionIncome + supplementalTaxablePool + supplementalTaxablePool2 + (socialSecurityIncome * 0.85); 
      let estimatedTaxDeduction = this.calculateDynamicIncomeTaxes(taxableBase); 
      let afterTaxNetIncome = Math.max(0, grossPreTaxIncome - estimatedTaxDeduction); 

      retirementMatrix.push({ 
        year: yearLabel, age: age, tradBalance: activeTradIRA, rothBalance: activeRothIRA, baseWithdrawal: baselineTargetGoal, 
        rmdAmount: currentYearRMD, actualWithdrawn: actualTradWithdrawn + actualRothWithdrawn, pension: pensionIncome, 
        socialSecurity: socialSecurityIncome, supplemental: supplementalAnnualInflow, supplemental2: supplementalAnnualInflow2, 
        grossIncome: grossPreTaxIncome, netIncome: afterTaxNetIncome 
      }); 

      // Step 7: Apply End-Of-Year Compound Growth 
      activeTradIRA *= tradGrowthMultiplier; 
      activeRothIRA *= rothGrowthMultiplier; 
    } // This brace closes your drawdown age for-loop!

    this.renderRetirementOutput(retirementMatrix); 
  } // This brace closes the entire generateProjections() method block!
  // === RENDERRETIREMENTOUTPUT METHOD ===
renderRetirementOutput(matrixData) {
  const tbody = this.dom.retirementTableBody;
  if (!tbody) return;
  tbody.innerHTML = '';
  const formatCurrency = (val) => '$' + Math.round(val || 0).toLocaleString();

  // 1. Analyze data matrix to look for dead data columns (all zeros)
  let hasYear = false;
  let hasAge = false;
  let hasTradBalance = false;
  let hasRothBalance = false;
  let hasBaseWithdrawal = false;
  let hasRmdAmount = false;
  let hasActualWithdrawn = false;
  let hasPension = false;
  let hasSS = false;
  let hasSupp1 = false;
  let hasSupp2 = false;
  let hasGrossIncome = false;
  let hasNetIncome = false;

  matrixData.forEach(row => {
    if ((row.year || 0) > 0) hasYear = true;
    if ((row.age || 0) > 0) hasAge = true;
    if ((row.tradBalance || 0) > 0.01) hasTradBalance = true;
    if ((row.rothBalance || 0) > 0.01) hasRothBalance = true;
    if ((row.baseWithdrawal || 0) > 0.01) hasBaseWithdrawal = true;
    if ((row.rmdAmount || 0) > 0.01) hasRmdAmount = true;
    if ((row.actualWithdrawn || 0) > 0.01) hasActualWithdrawn = true;
    if ((row.pension || 0) > 0.01) hasPension = true;
    if ((row.socialSecurity || 0) > 0.01) hasSS = true;
    if ((row.supplemental || 0) > 0.01) hasSupp1 = true;
    if ((row.supplemental2 || 0) > 0.01) hasSupp2 = true;
    if ((row.grossIncome || 0) > 0.01) hasGrossIncome = true;
    if ((row.netIncome || 0) > 0.01) hasNetIncome = true;
  });

  // 2. Safely apply the hidden-column modifier to the updated column header targets
  document.getElementById('thRetYear')?.classList.toggle('hidden-column', !hasYear);
  document.getElementById('thRetAge')?.classList.toggle('hidden-column', !hasAge);
  document.getElementById('thRetTradBal')?.classList.toggle('hidden-column', !hasTradBalance);
  document.getElementById('thRetRothBal')?.classList.toggle('hidden-column', !hasRothBalance);
  document.getElementById('thRetBaseWd')?.classList.toggle('hidden-column', !hasBaseWithdrawal);
  document.getElementById('thRetRmdAmt')?.classList.toggle('hidden-column', !hasRmdAmount);
  document.getElementById('thRetActWithdrawn')?.classList.toggle('hidden-column', !hasActualWithdrawn);
  document.getElementById('thPension')?.classList.toggle('hidden-column', !hasPension);
  document.getElementById('thSocialSecurity')?.classList.toggle('hidden-column', !hasSS);
  document.getElementById('thSupplemental1')?.classList.toggle('hidden-column', !hasSupp1);
  document.getElementById('thSupplemental2')?.classList.toggle('hidden-column', !hasSupp2);
  document.getElementById('thRetGrossInc')?.classList.toggle('hidden-column', !hasGrossIncome);
  document.getElementById('thRetNetInc')?.classList.toggle('hidden-column', !hasNetIncome);

  // 3. Render matching table cell blocks row-by-row
  matrixData.forEach(row => {
    const tr = document.createElement('tr');
    let tradStyle = row.tradBalance <= 0 ? 'color: #ef4444; font-weight: 500;' : '';
    let rothStyle = row.rothBalance <= 0 ? 'color: #ef4444; font-weight: 500;' : '';
    let rmdStyle = row.rmdAmount > row.baseWithdrawal ? 'color: #e6a23c; font-weight: bold;' : '';
    let netStyle = 'color: #4cd964; font-weight: 700;';

    tr.innerHTML = `
      <td class="${!hasYear ? 'hidden-column' : ''}">${row.year}</td>
      <td class="${!hasAge ? 'hidden-column' : ''}">${row.age}</td>
      <td class="${!hasTradBalance ? 'hidden-column' : ''}" style="${tradStyle}">${formatCurrency(row.tradBalance)}</td>
      <td class="${!hasRothBalance ? 'hidden-column' : ''}" style="${rothStyle}">${formatCurrency(row.rothBalance)}</td>
      <td class="${!hasBaseWithdrawal ? 'hidden-column' : ''}">${formatCurrency(row.baseWithdrawal)}</td>
      <td class="${!hasRmdAmount ? 'hidden-column' : ''}" style="${rmdStyle}">${formatCurrency(row.rmdAmount)}</td>
      <td class="${!hasActualWithdrawn ? 'hidden-column' : ''}">${formatCurrency(row.actualWithdrawn)}</td>
      <td class="${!hasPension ? 'hidden-column' : ''}">${formatCurrency(row.pension)}</td>
      <td class="${!hasSS ? 'hidden-column' : ''}">${formatCurrency(row.socialSecurity)}</td>
      <td class="${!hasSupp1 ? 'hidden-column' : ''}">${formatCurrency(row.supplemental)}</td>
      <td class="${!hasSupp2 ? 'hidden-column' : ''}">${formatCurrency(row.supplemental2)}</td>
      <td class="${!hasGrossIncome ? 'hidden-column' : ''}">${formatCurrency(row.grossIncome)}</td>
      <td class="${!hasNetIncome ? 'hidden-column' : ''}" style="${netStyle}">${formatCurrency(row.netIncome)}</td>
    `;
    tbody.appendChild(tr);
  });
}


  // === RENDERFORECASTOUTPUT METHOD WITH YTD RUNNING TOTALS ===
renderForecastOutput() {
  const tbody = this.dom.tableBody;
  if (!tbody) return;
  tbody.innerHTML = '';
  const formatCurrency = (val) => '$' + Math.round(val || 0).toLocaleString();

  // 1. Scan variables initialization
  let hasSpill = false; let hasMbcbp = false; let hasPsTrad = false; let hasPsRoth = false;
  let has401a = false; let hasPilotHsa = false; let hasTsp = false; let hasPilotRoth = false;
  let hasPilotTradIra = false; let hasBrokerage = false; let hasSpouseRoth = false;
  let hasSpouseTrad = false; let hasSpouseHsa = false; let hasCompanyDC = false;
  let hasPersonalTrad = false; let hasPersonalRoth = false; let hasCombined401k = false;
  let hasGrandTrad = false; let hasGrandRoth = false; let hasGrandCombined = false;
  
  // New Trackers for YTD Categories
  let hasYtdIndividual = false;
  let hasYtdCombined = false;

  this.calculatedForecastMatrix.forEach(row => {
    if ((row.spillOver || 0) > 0.01) hasSpill = true;
    if ((row.mbcbpBal || 0) > 0.01) hasMbcbp = true;
    if ((row.psTrad || 0) > 0.01) hasPsTrad = true;
    if ((row.psRoth || 0) > 0.01) hasPsRoth = true;
    if ((row.amt401a || 0) > 0.01) has401a = true;
    if ((row.pilotHsaBal || 0) > 0.01) hasPilotHsa = true;
    if ((row.tspTotal || 0) > 0.01) hasTsp = true;
    if ((row.yourIraBal || 0) > 0.01) hasPilotRoth = true;
    if ((row.pilotTradIraBal || 0) > 0.01) hasPilotTradIra = true;
    if ((row.brokerageBal || 0) > 0.01) hasBrokerage = true;
    if ((row.spouseIraBal || 0) > 0.01) hasSpouseRoth = true;
    if ((row.spouseTradIraBal || 0) > 0.01) hasSpouseTrad = true;
    if ((row.spouseHsaBal || 0) > 0.01) hasSpouseHsa = true;
    if ((row.companyDC || 0) > 0.01) hasCompanyDC = true;
    if ((row.personalTrad || 0) > 0.01) hasPersonalTrad = true;
    if ((row.personalRoth || 0) > 0.01) hasPersonalRoth = true;
    if ((row.combined401k || 0) > 0.01) hasCombined401k = true;
    if ((row.grandTrad || 0) > 0.01) hasGrandTrad = true;
    if ((row.grandRoth || 0) > 0.01) hasGrandRoth = true;
    if ((row.grandCombined || 0) > 0.01) hasGrandCombined = true;
    
    // Mark active if contributions exist
    if ((row.ytdIndividual || 0) > 0.01) hasYtdIndividual = true;
    if ((row.ytdCombined || 0) > 0.01) hasYtdCombined = true;
  });

  // 2. Map structural visibility overrides onto header components
  document.getElementById('thCompanyDC')?.classList.toggle('hidden-column', !hasCompanyDC);
  document.getElementById('thF1kSpill')?.classList.toggle('hidden-column', !hasSpill);
  document.getElementById('thMBCBPBal')?.classList.toggle('hidden-column', !hasMbcbp);
  document.getElementById('thPersonalTrad')?.classList.toggle('hidden-column', !hasPersonalTrad);
  document.getElementById('thPersonalRoth')?.classList.toggle('hidden-column', !hasPersonalRoth);
  document.getElementById('thYtdIndividual')?.classList.toggle('hidden-column', !hasYtdIndividual);
  document.getElementById('thYtdCombined')?.classList.toggle('hidden-column', !hasYtdCombined);
  document.getElementById('thPsTrad')?.classList.toggle('hidden-column', !hasPsTrad);
  document.getElementById('thPsRoth')?.classList.toggle('hidden-column', !hasPsRoth);
  document.getElementById('th401a')?.classList.toggle('hidden-column', !has401a);
  document.getElementById('thCombined401k')?.classList.toggle('hidden-column', !hasCombined401k);
  document.getElementById('thPilotHsa')?.classList.toggle('hidden-column', !hasPilotHsa);
  document.getElementById('thTSP')?.classList.toggle('hidden-column', !hasTsp);
  document.getElementById('thPilotRoth')?.classList.toggle('hidden-column', !hasPilotRoth);
  document.getElementById('thPilotTradIra')?.classList.toggle('hidden-column', !hasPilotTradIra);
  document.getElementById('thBrokerage')?.classList.toggle('hidden-column', !hasBrokerage);
  document.getElementById('thSpouseRoth')?.classList.toggle('hidden-column', !hasSpouseRoth);
  document.getElementById('thSpouseTrad')?.classList.toggle('hidden-column', !hasSpouseTrad);
  document.getElementById('thSpouseHsa')?.classList.toggle('hidden-column', !hasSpouseHsa);
  document.getElementById('thGrandTrad')?.classList.toggle('hidden-column', !hasGrandTrad);
  document.getElementById('thGrandRoth')?.classList.toggle('hidden-column', !hasGrandRoth);
  document.getElementById('thGrandCombined')?.classList.toggle('hidden-column', !hasGrandCombined);

  // 3. Render cells row-by-row
  this.calculatedForecastMatrix.forEach(row => {
    const tr = document.createElement('tr');
    const throttledStyle = 'color: #e6a23c; font-weight: bold;';
    const styleCompanyDC = row.isCompanyDCThrottled ? throttledStyle : '';
    const stylePersonalTrad = row.isPersonalTradThrottled ? throttledStyle : '';
    const stylePersonalRoth = row.isPersonalRothThrottled ? throttledStyle : '';
    const stylePsTrad = row.isPsTradThrottled ? throttledStyle : '';
    const stylePsRoth = row.isPsRothThrottled ? throttledStyle : '';
    const style401a = row.is401aThrottled ? throttledStyle : '';
    const grandTotalStyle = 'color: #4cd964; font-weight: 700;';
    const runningTotalsStyle = 'color: #8a8a8f; font-weight: 500; font-style: italic;';

    tr.innerHTML = `
      <td>${row.dateString}</td>
      <td>${row.seat}</td>
      <td>$${parseFloat(row.rate || 0).toFixed(2)}</td>
      <td>${formatCurrency(row.grossPay)}</td>
      <td>${row.age}</td>
      <td class="${!hasCompanyDC ? 'hidden-column' : ''}" ${styleCompanyDC ? `style="${styleCompanyDC}"` : ''}>${formatCurrency(row.companyDC)}</td>
      <td class="${!hasSpill ? 'hidden-column' : ''}">${formatCurrency(row.spillOver)}</td>
      <td class="${!hasMbcbp ? 'hidden-column' : ''}">${formatCurrency(row.mbcbpBal)}</td>
      <td class="${!hasPersonalTrad ? 'hidden-column' : ''}" ${stylePersonalTrad ? `style="${stylePersonalTrad}"` : ''}>${formatCurrency(row.personalTrad)}</td>
      <td class="${!hasPersonalRoth ? 'hidden-column' : ''}" ${stylePersonalRoth ? `style="${stylePersonalRoth}"` : ''}>${formatCurrency(row.personalRoth)}</td>
      <!-- INJECTED RUNNING YTD TOTAL VALUES INTO RENDERED ROWS -->
      <td class="${!hasYtdIndividual ? 'hidden-column' : ''}" style="${runningTotalsStyle}">${formatCurrency(row.ytdIndividual)}</td>
      <td class="${!hasYtdCombined ? 'hidden-column' : ''}" style="${runningTotalsStyle}">${formatCurrency(row.ytdCombined)}</td>
      <td class="${!hasPsTrad ? 'hidden-column' : ''}" ${stylePsTrad ? `style="${stylePsTrad}"` : ''}>${formatCurrency(row.psTrad)}</td>
      <td class="${!hasPsRoth ? 'hidden-column' : ''}" ${stylePsRoth ? `style="${stylePsRoth}"` : ''}>${formatCurrency(row.psRoth)}</td>
      <td class="${!has401a ? 'hidden-column' : ''}" ${style401a ? `style="${style401a}"` : ''}>${formatCurrency(row.amt401a)}</td>
      <td class="${!hasCombined401k ? 'hidden-column' : ''}">${formatCurrency(row.combined401k)}</td>
      <td class="${!hasPilotHsa ? 'hidden-column' : ''}">${formatCurrency(row.pilotHsaBal)}</td>
      <td class="${!hasTsp ? 'hidden-column' : ''}">${formatCurrency(row.tspTotal)}</td>
      <td class="${!hasPilotRoth ? 'hidden-column' : ''}">${formatCurrency(row.yourIraBal)}</td>
      <td class="${!hasPilotTradIra ? 'hidden-column' : ''}">${formatCurrency(row.pilotTradIraBal)}</td>
      <td class="${!hasBrokerage ? 'hidden-column' : ''}">${formatCurrency(row.brokerageBal)}</td>
      <td class="${!hasSpouseRoth ? 'hidden-column' : ''}">${formatCurrency(row.spouseIraBal)}</td>
      <td class="${!hasSpouseTrad ? 'hidden-column' : ''}">${formatCurrency(row.spouseTradIraBal)}</td>
      <td class="${!hasSpouseHsa ? 'hidden-column' : ''}">${formatCurrency(row.spouseHsaBal)}</td>
      <td class="${!hasGrandTrad ? 'hidden-column' : ''}" style="${grandTotalStyle}">${formatCurrency(row.grandTrad)}</td>
      <td class="${!hasGrandRoth ? 'hidden-column' : ''}" style="${grandTotalStyle}">${formatCurrency(row.grandRoth)}</td>
      <td class="${!hasGrandCombined ? 'hidden-column' : ''}" style="${grandTotalStyle}">${formatCurrency(row.grandCombined)}</td>
    `;
    tbody.appendChild(tr);
  });
}
} // SEALS THE ENTIRE APP CONTROLLER CLASS OBJECT STRUCTURE CLEANLY!

function printDashboardSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) {
        console.error(`Section ID ${sectionId} not found.`);
        return;
    }

    // 1. Open a clean, empty printing tab
    const printWindow = window.open('', '_blank');
    
    // 2. Clone the content of your HTML page's style sheets
    let stylesHtml = '';
    for (const sheet of document.styleSheets) {
        try {
            if (sheet.href) {
                stylesHtml += `<link rel="stylesheet" href="${sheet.href}">`;
            } else {
                const rules = Array.from(sheet.cssRules).map(rule => rule.cssText).join('\n');
                stylesHtml += `<style>${rules}</style>`;
            }
        } catch (e) {
            // Catch cross-origin stylesheet reading restrictions safely
        }
    }

    // 3. Extract the form data values manually so user edits aren't lost
    // (Standard element clones drop active text input states)
    const clonedSection = targetSection.cloneNode(true);
    const originalInputs = targetSection.querySelectorAll('input, select, textarea');
    const clonedInputs = clonedSection.querySelectorAll('input, select, textarea');
    
    originalInputs.forEach((input, index) => {
        if (input.type === 'checkbox' || input.type === 'radio') {
            clonedInputs[index].checked = input.checked;
        } else {
            clonedInputs[index].value = input.value;
        }
    });

    // 4. Inject styles, forms, and tables into the temporary document view
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Financial Report Export</title>
            ${stylesHtml}
            <style>
                /* Inject specific Print Rules right into the print canvas */
                @media print {
                    @page {
                        size: letter landscape;
                        margin: 0.4in;
                    }
                    body {
                        background: white !important;
                        color: black !important;
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                    }
                    /* Ensure scroll boundaries strip away to reveal all 480 rows */
                    .summary-grid-viewport-wrapper {
                        overflow: visible !important;
                        max-height: none !important;
                        height: auto !important;
                        display: block !important;
                    }
                    /* REPEAT HEADERS RULE: Forces table headers onto every page break */
                    thead {
                        display: table-header-group !important;
                    }
                    tr {
                        page-break-inside: avoid !important;
                    }
                    /* Scale widths specifically for your columns */
                    table {
                        width: 100% !important;
                        border-collapse: collapse !important;
                        table-layout: auto !important;
                    }
                    /* Dynamic print font styling scaling */
                    #grandProjectionsLedgerTable {
                        font-size: 7.5px !important; /* 27 Columns fit */
                    }
                    #grandRetirementProjectionsLedgerTable {
                        font-size: 10px !important; /* 13 Columns fit */
                    }
                    th, td {
                        padding: 3px 2px !important;
                        word-wrap: break-word !important;
                    }
                    /* Keep custom highlighting formatting vibrant */
                    * {
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    /* Hide user interactive elements on print pages */
                    button, .no-print {
                        display: none !important;
                    }
                }
            </style>
        </head>
        <body>
            <div class="print-container">
                ${clonedSection.innerHTML}
            </div>
        </body>
        </html>
    `);

    printWindow.document.close();

    // 5. Fire print command once layout resources finish executing
    printWindow.onload = function() {
        printWindow.print();
        // Automatically close the temporary background tab after print prompt exits
        setTimeout(() => printWindow.close(), 500);
    };
}

function downloadWealthPDF() {
    printDashboardSection('monthlyWealthDashboardSection'); 
}

function downloadRetirementPDF() {
    printDashboardSection('grandSummaryDashboardPanel'); 
}

window.downloadWealthPDF = downloadWealthPDF;
window.downloadRetirementPDF = downloadRetirementPDF;

