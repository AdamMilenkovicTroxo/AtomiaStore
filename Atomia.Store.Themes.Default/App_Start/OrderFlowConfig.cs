using Atomia.Store.AspNetMvc.Infrastructure;

namespace Atomia.Store.Themes.Default
{
    public static class OrderFlowConfig
    {
        public static void RegisterOrderFlows(OrderFlowCollection orderFlows)
        {
            var defaultOrderFlow = new OrderFlow("DefaultFlow", new[] { "Domains", "HostingPackage", "Account", "Checkout" });
            var cloudOrderFlow = new OrderFlow("CloudSignup", new[] { "Account" });
            var existingCustomerOrderFlow = new OrderFlow("ExistingCustomerFlow", new[] { "Domains", "HostingPackage", "ExistingCustomer", "Checkout" });

            // Alias Default to Domains, to match Default route setup. 
            defaultOrderFlow.AddRouteNameAlias("OrderFlowStart", "Domains");
            cloudOrderFlow.AddRouteNameAlias("OrderFlowStart", "Account");

            orderFlows.Add(defaultOrderFlow, true);
            orderFlows.Add(cloudOrderFlow);
            orderFlows.Add(existingCustomerOrderFlow, false);
        }
    }
}
