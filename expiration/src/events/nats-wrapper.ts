import nats, { Stan } from 'node-nats-streaming';

class NatsWrapper {
  private stan?: Stan;

  get client() {
    if (!this.stan) {
      throw new Error('Cannot access NATS client before connecting');
    }

    return this.stan;
  }

  connect(clusterId: string, clientId: string, url: string): Promise<void> {
    this.stan = nats.connect(clusterId, clientId, { url });

    return new Promise((resolve, reject) => {
      this.client.on('connect', () => {
        console.log('Connected to NATS');
        resolve();
      });
      this.client.on('error', (err) => {
        reject(err);
      });
    });
  }
}

export const natsWrapper = new NatsWrapper();
