const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="font-display text-lg text-primary text-glow mb-2">Dr. Kasimba Juju</p>
        <p className="font-body text-sm text-muted-foreground">
          Traditional Healer & Spiritual Guide — Kenya
        </p>
        <p className="font-body text-xs text-muted-foreground mt-4">
          © {new Date().getFullYear()} Dr. Kasimba Juju. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
