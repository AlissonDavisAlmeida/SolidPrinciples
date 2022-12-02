import { ContractModel, ContractPrime } from '../models/Contract';

describe('Contract Model tests', () => {
  it('should create a contract per 12 months', async () => {
    const contract = new ContractModel({
      id: '001',
      initial_date: new Date('2020-01-01'),
      month: 6,
      monthlyCost: 1000,
      expiration_date: new Date('2021-01-01')
    });

    expect(contract.getId()).toBe('001');
    expect(contract.getInitialDate()).toStrictEqual(new Date('2020-01-01'));
    expect(contract.getExpirationDate()).toStrictEqual(new Date('2021-01-01'));
    expect(contract.getMonthlyCost()).toBe(1000);
    expect(contract.getMonth()).toBe(6);
  });

  it('monthlyDescount contract prime 24 months', async () => {
    const contractPrime = new ContractPrime({
      id: '001',
      initial_date: new Date('2020-01-01'),
      month: 24,
      monthlyCost: 1000,
      expiration_date: new Date('2021-01-01')

    }, 0.1);

    expect(contractPrime.getId()).toBe('001');
    expect(contractPrime.getInitialDate()).toStrictEqual(new Date('2020-01-01'));
    expect(contractPrime.getExpirationDate()).toStrictEqual(new Date('2021-01-01'));
    expect(contractPrime.monthlyDiscount()).toBe(900);
  });
});
