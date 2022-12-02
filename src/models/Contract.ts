import { IContract } from './../interfaces/IContract';
export class ContractModel {
  constructor(
    public contract: IContract
  ) {
  }

  getId() {
    return this.contract.id;
  }

  getInitialDate() {
    return this.contract.initial_date;
  }

  getExpirationDate() {
    return this.contract.expiration_date;
  }

  getMonthlyCost() {
    return this.contract.monthlyCost;
  }

  getMonth() {
    return this.contract.month;
  }
}

export class ContractPrime extends ContractModel {
  constructor(
    public contract: IContract,
    public descount: number
  ) {
    super(contract);
  }

  monthlyDiscount() {
    return this.getMonthlyCost() - (this.getMonthlyCost() * this.descount);
  }
}
