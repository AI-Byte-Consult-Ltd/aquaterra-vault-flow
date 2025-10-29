import { MigrationButton } from "@/components/MigrationButton";
import { Card } from "@/components/ui/card";
import { Zap, Waves, Coins, Send } from "lucide-react";
import { useConnect, useAccount } from 'wagmi';
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const { connect, connectors } = useConnect();
  const { isConnected } = useAccount();

  const handleRaversePayment = () => {
    if (!isConnected) {
      const walletConnectConnector = connectors.find(c => c.id === 'walletConnect');
      if (walletConnectConnector) {
        connect({ connector: walletConnectConnector });
      } else {
        toast({
          title: "Connect Wallet",
          description: "Please connect your wallet to continue with the migration process.",
        });
      }
    } else {
      toast({
        title: "Payment Initiated",
        description: "Processing 1M $RAVERSE payment on Cronos Chain...",
      });
    }
  };

  const handleCroPayment = () => {
    if (!isConnected) {
      const walletConnectConnector = connectors.find(c => c.id === 'walletConnect');
      if (walletConnectConnector) {
        connect({ connector: walletConnectConnector });
      } else {
        toast({
          title: "Connect Wallet",
          description: "Please connect your wallet to continue with the migration process.",
        });
      }
    } else {
      toast({
        title: "Payment Initiated",
        description: "Processing 25 $CRO migration fee...",
      });
    }
  };

  const handleNftTransfer = () => {
    if (!isConnected) {
      const walletConnectConnector = connectors.find(c => c.id === 'walletConnect');
      if (walletConnectConnector) {
        connect({ connector: walletConnectConnector });
      } else {
        toast({
          title: "Connect Wallet",
          description: "Please connect your wallet to continue with the migration process.",
        });
      }
    } else {
      toast({
        title: "NFT Transfer",
        description: "Preparing to transfer your NFT. Please confirm in your wallet.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-[120px] animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <main className="relative z-10 w-full max-w-4xl space-y-12 animate-fade-in">
        {/* Header Section */}
        <header className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold glow-text mb-4">
            🌊 The Great AquaTerra Vault Migration
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Migrate your NFTs safely and unlock their power on Ethereum.
          </p>
        </header>

        {/* Action Buttons Section */}
        <section className="space-y-6 flex flex-col items-center">
          <MigrationButton
            label="Pay 1M $RAVERSE"
            tooltip="Required for migration step 1"
            onClick={handleRaversePayment}
            icon={<Coins className="w-6 h-6" />}
            glowClass=""
          />

          <MigrationButton
            label="Pay 25 $CRO"
            tooltip="Migration fee"
            onClick={handleCroPayment}
            icon={<Waves className="w-6 h-6" />}
            glowClass="glow-violet"
          />

          <MigrationButton
            label="Send Your NFT"
            tooltip="Finalize your NFT transfer"
            onClick={handleNftTransfer}
            icon={<Send className="w-6 h-6" />}
            glowClass="glow-blue"
          />
        </section>

        {/* Info Box */}
        <Card className="bg-card/50 backdrop-blur-md border-primary/30 p-6 max-w-2xl mx-auto">
          <div className="flex items-start gap-3">
            <Zap className="w-6 h-6 text-secondary flex-shrink-0 mt-1 animate-glow-pulse" />
            <p className="text-foreground/90">
              <strong>Migration is automatic</strong> after all three steps are complete. 
              You'll receive your Ethereum NFT within 24 hours.
            </p>
          </div>
        </Card>

        {/* Footer */}
        <footer className="text-center space-y-4 pt-12">
          <div className="flex items-center justify-center gap-3">
            <Waves className="w-8 h-8 text-secondary animate-glow-pulse" />
            <span className="text-2xl font-bold glow-text">AquaTerra World</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Powered by <span className="text-accent font-semibold">NICS AI Ecosystem</span> — Bringing Intelligence to the Metaverse.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
