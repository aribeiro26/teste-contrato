import { Verifier } from '@pact-foundation/pact';

const providerService = `http://localhost:3378`;

describe('Pact Verification', () => {
  it('should validate the expectations of the consumer service', () => {
    const brokerOpts = {
      provider: 'characters-api-application',
      providerBaseUrl: providerService,
      pactUrls: [`http://localhost:9292/pacts/provider/characters-api-application/consumer/web-application/latest`],
      publishVerificationResult: true,
      providerVersion: '1.0.0'
    };

    return new Verifier(brokerOpts).verifyProvider();
//     return new Verifier(pactFlowOpts).verifyProvider();
  })
});